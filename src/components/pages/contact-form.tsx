"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const INTERESTS = [
  "Local AI Systems",
  "LLM Applications",
  "Knowledge Intelligence",
  "AI Infrastructure",
  "AI Consulting",
  "Other",
] as const;

const CONTACT_EMAIL = "hussain.nazary@haal-lab.solutions";

export function ContactForm() {
  // Use the Formspree React hook - it handles submission, loading, and errors
  const [state, handleSubmit] = useForm("xbdnlvrd");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [otherInterest, setOtherInterest] = useState("");

  const toggleInterest = (i: string) => {
    setSelectedInterests((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  // Success state handled by Formspree
  if (state.succeeded) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-start justify-center rounded-2xl border border-hl-border bg-hl-surface/60 p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-hl-cyan/40 bg-hl-cyan/10 text-hl-cyan">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
          Message received.
        </h2>
        <p className="mt-3 max-w-md text-base leading-relaxed text-hl-muted">
          Thank you for reaching out. We will review your inquiry and respond from{" "}
          <span className="text-foreground">{CONTACT_EMAIL}</span> within two business days.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8 rounded-full border-hl-border text-foreground"
          onClick={() => window.location.reload()}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-hl-border bg-hl-surface/60 p-7 md:p-9"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Ada Lovelace"
            className="bg-hl-surface-2"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </Field>
        <Field label="Email" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="ada@company.com"
            className="bg-hl-surface-2"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Company / Organization" htmlFor="company" optional>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Acme Research"
            className="bg-hl-surface-2"
          />
        </Field>
      </div>

      <div className="mt-6">
        <Label className="text-xs font-medium uppercase tracking-wider text-hl-muted">
          What are you interested in?
        </Label>
        <div className="mt-3 flex flex-wrap gap-2">
          {INTERESTS.map((i) => {
            const active = selectedInterests.includes(i);
            return (
              <button
                key={i}
                type="button"
                onClick={() => toggleInterest(i)}
                className={`rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-all ${
                  active
                    ? "border-hl-cyan/50 bg-hl-cyan/10 text-hl-cyan"
                    : "border-hl-border bg-hl-surface-2 text-hl-muted hover:border-hl-cyan/30 hover:text-foreground"
                }`}
              >
                {i}
              </button>
            );
          })}
        </div>
        
        {/* Show text input when "Other" is selected */}
        {selectedInterests.includes("Other") && (
          <div className="mt-4">
            <Input
              id="otherInterest"
              name="otherInterest"
              value={otherInterest}
              onChange={(e) => setOtherInterest(e.target.value)}
              placeholder="Please specify your interest..."
              className="bg-hl-surface-2"
            />
          </div>
        )}
        
        {/* Hidden field to submit selected interests */}
        <input 
          type="hidden" 
          name="interests" 
          value={
            selectedInterests.includes("Other") && otherInterest
              ? selectedInterests.filter(i => i !== "Other").concat(`Other: ${otherInterest}`).join(", ")
              : selectedInterests.join(", ")
          } 
        />
      </div>

      <div className="mt-6">
        <Field label="Project context" htmlFor="message">
          <Textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="What problem are you solving? What does success look like? What constraints (privacy, latency, budget, hardware) should we know about?"
            className="bg-hl-surface-2 resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </Field>
      </div>

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-hl-muted">
          By submitting, you agree to be contacted about your inquiry. We never share
          your data.
        </p>
        <Button
          type="submit"
          disabled={state.submitting}
          className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-6 py-3 text-sm font-semibold text-[#04141A] transition-all hover:bg-hl-cyan/90 disabled:opacity-60"
        >
          {state.submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send message
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label
        htmlFor={htmlFor}
        className="text-xs font-medium uppercase tracking-wider text-hl-muted"
      >
        {label}
        {optional && <span className="ml-1 text-hl-muted/60">(optional)</span>}
      </Label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
