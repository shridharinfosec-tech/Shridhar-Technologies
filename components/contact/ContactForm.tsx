"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { budgetRanges, launchWindows, projectTypes } from "@/data/contactForm";
import { siteConfig } from "@/data/siteConfig";
import { submitContactForm, type ContactFormData } from "@/lib/contact";
import Button from "@/components/shared/Button";
import { SpinnerIcon } from "@/components/shared/Icons";
import { cn } from "@/lib/cn";

type Errors = Partial<Record<keyof ContactFormData, string>>;
type Status = "idle" | "sending" | "success" | "error";

const initialData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  launch: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Real people take longer than this to fill in a name, email and message.
// Faster submissions (and any that fill the hidden honeypot) are treated as
// spam: they get the success panel but nothing is sent.
const MIN_FILL_MS = 2500;

function fieldClasses(hasError: boolean) {
  return cn(
    "mt-2 w-full min-h-11 rounded-lg border bg-ink px-4 py-3 text-base text-snow placeholder:text-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber sm:text-sm",
    hasError ? "border-error" : "border-line-bright",
  );
}

function Label({
  htmlFor,
  required = false,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-semibold text-snow">
      {children}
      {required && (
        <>
          <span aria-hidden className="ml-0.5 text-error">
            *
          </span>
          <span className="sr-only"> (required)</span>
        </>
      )}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-error">
      {message}
    </p>
  );
}

export default function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submittedName, setSubmittedName] = useState("");
  const startedAt = useRef(0);
  const honeypot = useRef<HTMLInputElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const update =
    (field: keyof ContactFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setData((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (): Errors => {
    const nextErrors: Errors = {};
    if (!data.name.trim()) nextErrors.name = "Please enter your name.";
    if (!data.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!emailPattern.test(data.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!data.message.trim()) nextErrors.message = "Please add a short message.";
    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = Object.keys(nextErrors)[0];
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    const name = data.name.trim();
    const looksLikeSpam =
      Boolean(honeypot.current?.value) || Date.now() - startedAt.current < MIN_FILL_MS;

    setSubmittedName(name);
    if (looksLikeSpam) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      await submitContactForm({ ...data, name, email: data.email.trim() });
      setStatus("success");
      setData(initialData);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-line-bright bg-night p-8"
      >
        <h2 className="font-display text-2xl font-bold text-snow">
          Thanks, {submittedName}.
        </h2>
        <p className="mt-3 leading-relaxed text-fog">
          We will reply within one business day.
        </p>
        <p className="mt-3 leading-relaxed text-fog">
          Want to talk sooner?{" "}
          {siteConfig.bookingUrl ? (
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyber underline underline-offset-2 hover:text-snow"
            >
              Book a 20 minute call
            </a>
          ) : (
            <a
              href={siteConfig.phoneHref}
              className="font-semibold text-cyber underline underline-offset-2 hover:text-snow"
            >
              Call us on {siteConfig.phone}
            </a>
          )}
          .
        </p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-busy={sending}
      className="space-y-6"
    >
      <p className="text-sm text-mist">
        Fields marked <span aria-hidden className="text-error">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      {/* Honeypot: hidden from people and assistive tech, filled by bots. */}
      <div aria-hidden className="hidden">
        <label htmlFor="website">Website</label>
        <input
          ref={honeypot}
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" required>
            Full name
          </Label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={data.name}
            onChange={update("name")}
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClasses(Boolean(errors.name))}
          />
          <FieldError id="name-error" message={errors.name} />
        </div>

        <div>
          <Label htmlFor="email" required>
            Work email
          </Label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={data.email}
            onChange={update("email")}
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClasses(Boolean(errors.email))}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={data.phone}
            onChange={update("phone")}
            className={fieldClasses(false)}
          />
        </div>

        <div>
          <Label htmlFor="company">Company</Label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={data.company}
            onChange={update("company")}
            className={fieldClasses(false)}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="projectType">What are you building?</Label>
        <select
          id="projectType"
          name="projectType"
          value={data.projectType}
          onChange={update("projectType")}
          className={fieldClasses(false)}
        >
          <option value="">Choose one</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="budget">Budget range</Label>
          <select
            id="budget"
            name="budget"
            value={data.budget}
            onChange={update("budget")}
            className={fieldClasses(false)}
          >
            <option value="">Choose a range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="launch">When do you want to launch?</Label>
          <select
            id="launch"
            name="launch"
            value={data.launch}
            onChange={update("launch")}
            className={fieldClasses(false)}
          >
            <option value="">Choose a window</option>
            {launchWindows.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="message" required>
          Tell us about the project
        </Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={data.message}
          onChange={update("message")}
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={fieldClasses(Boolean(errors.message))}
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      {status === "error" && (
        <div role="alert" className="rounded-lg border border-error/40 bg-error/5 p-4 text-sm text-snow">
          Your message was not sent. Please try again, or email us at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-semibold text-cyber underline underline-offset-2"
          >
            {siteConfig.email}
          </a>
          .
        </div>
      )}

      <Button
        type="submit"
        disabled={sending}
        className="w-full disabled:cursor-wait disabled:opacity-80 sm:w-auto"
      >
        {sending && <SpinnerIcon className="h-4 w-4 motion-safe:animate-spin" />}
        {sending ? "Sending" : "Send message"}
      </Button>
    </form>
  );
}
