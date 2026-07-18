"use client";

import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CONTACT_EMAIL = "hussain.nazary@haal-lab.solutions";

export function EnterpriseContactForm() {
  const t = useTranslations("contactForm");
  
  // Use the Formspree React hook
  const [state, handleSubmit] = useForm("xbdnlvrd");
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    role: "",
    organizationType: "",
    projectInterest: "",
    dataEnvironment: "",
    projectDescription: "",
    timeline: "",
    // "Other" specification fields
    otherRole: "",
    otherOrganizationType: "",
    otherProjectInterest: "",
    // Honeypot field - invisible to users, catches bots
    _gotcha: "",
  });

  // Track when form loads (for bot detection)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).__formLoadTime = Date.now();
    }
  }, []);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle form submission with bot detection
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Honeypot check - if filled, it's a bot
    if (formData._gotcha) {
      console.log("Bot detected via honeypot");
      e.preventDefault();
      return; // Silently reject, don't show error to bot
    }

    // Simple time-based bot detection (form submitted too fast)
    const submissionTime = Date.now();
    const formLoadTime = (window as any).__formLoadTime || 0;
    if (submissionTime - formLoadTime < 3000) {
      // Less than 3 seconds - likely a bot
      console.log("Bot detected: form submitted too quickly");
      e.preventDefault();
      return; // Silently reject
    }

    // Let Formspree handle the actual submission
    handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div className="flex h-full min-h-[500px] flex-col items-start justify-center rounded-2xl border border-hl-border bg-hl-surface/60 p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-hl-cyan/40 bg-hl-cyan/10 text-hl-cyan">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
          {t("submitSuccess")}
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-hl-muted">
          {t("submitSuccessMessage")}
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8 rounded-full border-hl-border text-foreground"
          onClick={() => window.location.reload()}
        >
          {t("sendAnother")}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-hl-border bg-hl-surface/60 p-8 md:p-10"
    >
      {/* Required fields */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label={t("fullName")} htmlFor="fullName" required>
          <Input
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            placeholder="Dr. Marie Curie"
            className="bg-hl-surface-2"
          />
          <ValidationError prefix="Full name" field="fullName" errors={state.errors} />
        </FormField>
        <FormField label={t("workEmail")} htmlFor="email" required>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="marie.curie@organization.edu"
            className="bg-hl-surface-2"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </FormField>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label={t("company")} htmlFor="company" required>
          <Input
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={(e) => updateField("company", e.target.value)}
            placeholder="University of Paris"
            className="bg-hl-surface-2"
          />
        </FormField>
        <FormField label={t("role")} htmlFor="role" required>
          <Select value={formData.role} onValueChange={(v) => updateField("role", v)}>
            <SelectTrigger className="bg-hl-surface-2">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ceo">{t("roleOptions.ceo")}</SelectItem>
              <SelectItem value="researcher">{t("roleOptions.researcher")}</SelectItem>
              <SelectItem value="engineer">{t("roleOptions.engineer")}</SelectItem>
              <SelectItem value="itManager">{t("roleOptions.itManager")}</SelectItem>
              <SelectItem value="other">{t("roleOptions.other")}</SelectItem>
            </SelectContent>
          </Select>
          {/* Show text input when "other" is selected */}
          {formData.role === "other" && (
            <div className="mt-2">
              <Input
                id="otherRole"
                name="otherRole"
                value={formData.otherRole}
                onChange={(e) => updateField("otherRole", e.target.value)}
                placeholder={t("roleOptions.otherPlaceholder") || "Please specify your role..."}
                className="bg-hl-surface-2"
              />
            </div>
          )}
          {/* Hidden field to submit the select value */}
          <input 
            type="hidden" 
            name="role" 
            value={formData.role === "other" && formData.otherRole ? `Other: ${formData.otherRole}` : formData.role} 
          />
        </FormField>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label={t("organizationType")} htmlFor="organizationType" required>
          <Select
            value={formData.organizationType}
            onValueChange={(v) => updateField("organizationType", v)}
          >
            <SelectTrigger className="bg-hl-surface-2">
              <SelectValue placeholder="Select organization type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enterprise">{t("organizationTypeOptions.enterprise")}</SelectItem>
              <SelectItem value="university">{t("organizationTypeOptions.university")}</SelectItem>
              <SelectItem value="publicOrg">{t("organizationTypeOptions.publicOrg")}</SelectItem>
              <SelectItem value="startup">{t("organizationTypeOptions.startup")}</SelectItem>
              <SelectItem value="other">{t("organizationTypeOptions.other")}</SelectItem>
            </SelectContent>
          </Select>
          {/* Show text input when "other" is selected */}
          {formData.organizationType === "other" && (
            <div className="mt-2">
              <Input
                id="otherOrganizationType"
                name="otherOrganizationType"
                value={formData.otherOrganizationType}
                onChange={(e) => updateField("otherOrganizationType", e.target.value)}
                placeholder={t("organizationTypeOptions.otherPlaceholder") || "Please specify your organization type..."}
                className="bg-hl-surface-2"
              />
            </div>
          )}
          <input 
            type="hidden" 
            name="organizationType" 
            value={
              formData.organizationType === "other" && formData.otherOrganizationType 
                ? `Other: ${formData.otherOrganizationType}` 
                : formData.organizationType
            } 
          />
        </FormField>
        <FormField label={t("projectInterest")} htmlFor="projectInterest" required>
          <Select
            value={formData.projectInterest}
            onValueChange={(v) => updateField("projectInterest", v)}
          >
            <SelectTrigger className="bg-hl-surface-2">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="privateAI">{t("projectInterestOptions.privateAI")}</SelectItem>
              <SelectItem value="rag">{t("projectInterestOptions.rag")}</SelectItem>
              <SelectItem value="docSearch">{t("projectInterestOptions.docSearch")}</SelectItem>
              <SelectItem value="automation">{t("projectInterestOptions.automation")}</SelectItem>
              <SelectItem value="customModels">{t("projectInterestOptions.customModels")}</SelectItem>
              <SelectItem value="infrastructure">{t("projectInterestOptions.infrastructure")}</SelectItem>
              <SelectItem value="other">{t("projectInterestOptions.other")}</SelectItem>
            </SelectContent>
          </Select>
          {/* Show text input when "other" is selected */}
          {formData.projectInterest === "other" && (
            <div className="mt-2">
              <Input
                id="otherProjectInterest"
                name="otherProjectInterest"
                value={formData.otherProjectInterest}
                onChange={(e) => updateField("otherProjectInterest", e.target.value)}
                placeholder={t("projectInterestOptions.otherPlaceholder") || "Please specify your project interest..."}
                className="bg-hl-surface-2"
              />
            </div>
          )}
          <input 
            type="hidden" 
            name="projectInterest" 
            value={
              formData.projectInterest === "other" && formData.otherProjectInterest 
                ? `Other: ${formData.otherProjectInterest}` 
                : formData.projectInterest
            } 
          />
        </FormField>
      </div>

      <div className="mt-5">
        <FormField label={t("dataEnvironment")} htmlFor="dataEnvironment" required>
          <Select
            value={formData.dataEnvironment}
            onValueChange={(v) => updateField("dataEnvironment", v)}
          >
            <SelectTrigger className="bg-hl-surface-2">
              <SelectValue placeholder="Select data environment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="onPremise">{t("dataEnvironmentOptions.onPremise")}</SelectItem>
              <SelectItem value="privateCloud">{t("dataEnvironmentOptions.privateCloud")}</SelectItem>
              <SelectItem value="europeanCloud">{t("dataEnvironmentOptions.europeanCloud")}</SelectItem>
              <SelectItem value="notDecided">{t("dataEnvironmentOptions.notDecided")}</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" name="dataEnvironment" value={formData.dataEnvironment} />
        </FormField>
      </div>

      <div className="mt-5">
        <FormField label={t("projectDescription")} htmlFor="projectDescription" required>
          <Textarea
            id="projectDescription"
            name="projectDescription"
            required
            rows={7}
            value={formData.projectDescription}
            onChange={(e) => updateField("projectDescription", e.target.value)}
            placeholder={t("projectDescriptionPlaceholder")}
            className="bg-hl-surface-2 resize-none"
          />
          <ValidationError prefix="Project description" field="projectDescription" errors={state.errors} />
        </FormField>
      </div>

      <div className="mt-5">
        <FormField label={t("expectedTimeline")} htmlFor="timeline" optional>
          <Select value={formData.timeline} onValueChange={(v) => updateField("timeline", v)}>
            <SelectTrigger className="bg-hl-surface-2">
              <SelectValue placeholder="Select timeline (optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="exploring">{t("timelineOptions.exploring")}</SelectItem>
              <SelectItem value="oneToThree">{t("timelineOptions.oneToThree")}</SelectItem>
              <SelectItem value="threeToSix">{t("timelineOptions.threeToSix")}</SelectItem>
              <SelectItem value="sixPlus">{t("timelineOptions.sixPlus")}</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" name="timeline" value={formData.timeline} />
        </FormField>
      </div>

      {/* Honeypot field - Hidden from users, catches bots */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          value={formData._gotcha}
          onChange={(e) => updateField("_gotcha", e.target.value)}
        />
      </div>

      <div className="mt-8 flex flex-col items-start gap-5 border-t border-hl-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-hl-muted max-w-md">
          {t("privacyNotice")}
        </p>
        <Button
          type="submit"
          disabled={state.submitting}
          className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-7 py-3.5 text-sm font-bold text-gray-900 transition-all hover:bg-hl-cyan/90 hover:shadow-[0_0_30px_-8px_rgba(96,165,250,0.5)] disabled:opacity-60"
        >
          {state.submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              {t("submitting")}
            </>
          ) : (
            <>
              {t("requestDiscussion")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function FormField({
  label,
  htmlFor,
  required,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  const t = useTranslations("contactForm");
  return (
    <div>
      <Label
        htmlFor={htmlFor}
        className="text-xs font-medium uppercase tracking-wider text-hl-muted"
      >
        {label}
        {required && <span className="ml-1 text-hl-cyan">*</span>}
        {optional && <span className="ml-1 text-hl-muted/60">{t("optional")}</span>}
      </Label>
      <div className="mt-2.5">{children}</div>
    </div>
  );
}
