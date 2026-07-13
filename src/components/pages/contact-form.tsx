"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const INTERESTS = [
  "Local AI Systems",
  "LLM Applications",
  "Knowledge Intelligence",
  "AI Infrastructure",
  "AI Consulting",
  "Other",
] as const;

/**
 * Optional: set NEXT_PUBLIC_FORMSPREE_ENDPOINT to a Formspree (or compatible)
 * form endpoint, e.g. "https://formspree.io/f/abcdwxyz". When set, the form
 * POSTs to that endpoint. When unset, the form falls back to a mailto: link
 * that opens the visitor's email client pre-filled — no backend required.
 *
 * This makes the form work on static hosts like GitHub Pages.
 */
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";
const CONTACT_EMAIL = "hello@haal-lab.solutions";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (i: string) => {
    setSelectedInterests((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: (formData.get("company") as string) || "",
      interests: selectedInterests.join(", "),
      message: formData.get("message") as string,
    };

    try {
      if (FORMSPREE_ENDPOINT) {
        // POST to Formspree / Getform / Basin — works on any static host.
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error(`Form service responded ${res.status}`);
      } else {
        // No backend — fall back to mailto: with pre-filled body.
        // Opens the visitor's email client. No server required.
        const subject = encodeURIComponent(
          `[Haal Lab inquiry] from ${payload.name}${payload.company ? ` (${payload.company})` : ""}`
        );
        const body = encodeURIComponent(
          [
            `Name: ${payload.name}`,
            `Email: ${payload.email}`,
            payload.company ? `Company: ${payload.company}` : null,
            selectedInterests.length ? `Interests: ${selectedInterests.join(", ")}` : null,
            "",
            "Message:",
            payload.message,
          ]
            .filter(Boolean)
            .join("\n")
        );
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        // Small delay so the mailto: navigation completes before we flip state.
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      setSubmitted(true);
      toast({
        title: FORMSPREE_ENDPOINT ? "Message sent" : "Opening your email client",
        description: FORMSPREE_ENDPOINT
          ? "We will respond within two business days."
          : "Your email client should now have a pre-filled message to hello@haal-lab.solutions.",
      });
    } catch (err) {
      console.error("[Haal Lab contact] submission failed:", err);
      toast({
        title: "Something went wrong",
        description:
          "Could not send the form. Please email us directly at hello@haal-lab.solutions.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-start justify-center rounded-2xl border border-hl-border bg-hl-surface/60 p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-hl-cyan/40 bg-hl-cyan/10 text-hl-cyan">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
          {FORMSPREE_ENDPOINT ? "Message received." : "Ready to send."}
        </h2>
        <p className="mt-3 max-w-md text-base leading-relaxed text-hl-muted">
          {FORMSPREE_ENDPOINT ? (
            <>
              Thank you for reaching out. We will review your inquiry and respond from{" "}
              <span className="text-foreground">hello@haal-lab.solutions</span> within two
              business days.
            </>
          ) : (
            <>
              Your email client should have opened with a pre-filled message. If it
              didn&apos;t, email us directly at{" "}
              <span className="text-foreground">hello@haal-lab.solutions</span> — we
              respond within two business days.
            </>
          )}
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8 rounded-full border-hl-border text-foreground"
          onClick={() => {
            setSubmitted(false);
            setSelectedInterests([]);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
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
        </Field>
      </div>

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-hl-muted">
          By submitting, you agree to be contacted about your inquiry. We never share
          your data.
        </p>
        <Button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-6 py-3 text-sm font-semibold text-[#04141A] transition-all hover:bg-hl-cyan/90 disabled:opacity-60"
        >
          {submitting ? (
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
