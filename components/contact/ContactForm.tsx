"use client";

import { useState, type FormEvent } from "react";
import { categories } from "@/data/services";
import { submitContactForm, type ContactFormData } from "@/lib/mailto";
import Button from "@/components/shared/Button";
import { cn } from "@/lib/cn";

type Errors = Partial<Record<keyof ContactFormData, string>>;

const initialData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  serviceInterest: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function fieldClasses(hasError: boolean) {
  return cn(
    "mt-2 w-full min-h-11 rounded-lg border bg-ink px-4 py-3 text-sm text-fog placeholder:text-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber",
    hasError ? "border-error" : "border-line-bright",
  );
}

export default function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof ContactFormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setData((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): Errors => {
    const nextErrors: Errors = {};
    if (!data.name.trim()) nextErrors.name = "Please enter your name.";
    if (!data.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!emailPattern.test(data.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!data.message.trim()) nextErrors.message = "Please add a short message.";
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    submitContactForm(data);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-snow">
          Full name <span className="text-error">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={data.name}
          onChange={update("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClasses(Boolean(errors.name))}
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-sm text-error">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-snow">
          Email <span className="text-error">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={data.email}
          onChange={update("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClasses(Boolean(errors.email))}
        />
        {errors.email && (
          <p id="email-error" className="mt-2 text-sm text-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-snow">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={update("phone")}
            className={fieldClasses(false)}
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-snow">
            Company
          </label>
          <input
            id="company"
            type="text"
            value={data.company}
            onChange={update("company")}
            className={fieldClasses(false)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="serviceInterest" className="text-sm font-medium text-snow">
          Service interested in
        </label>
        <select
          id="serviceInterest"
          value={data.serviceInterest}
          onChange={update("serviceInterest")}
          className={fieldClasses(false)}
        >
          <option value="">Select a service area</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-snow">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={data.message}
          onChange={update("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={fieldClasses(Boolean(errors.message))}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-error">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <Button type="submit" className="w-full sm:w-auto">
          Send message
        </Button>
        <p className="mt-3 text-xs text-mist">
          Submitting opens your email app with your message pre-filled.
        </p>
        {submitted && (
          <p role="status" className="mt-3 text-sm font-medium text-cyber">
            Your email app should be opening now — if it doesn&apos;t, email us
            directly instead.
          </p>
        )}
      </div>
    </form>
  );
}
