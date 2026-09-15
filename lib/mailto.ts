import { siteConfig } from "@/data/siteConfig";

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  message: string;
};

export function buildMailtoUrl(data: ContactFormData): string {
  const subject = `New enquiry from ${data.name} | ${siteConfig.name}`;

  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone && `Phone: ${data.phone}`,
    data.company && `Company: ${data.company}`,
    data.serviceInterest && `Service interested in: ${data.serviceInterest}`,
    "",
    "Message:",
    data.message,
  ].filter((line): line is string => Boolean(line) || line === "");

  const body = lines.join("\n");

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Isolated so the delivery mechanism (mailto: today) can later be swapped for
// Netlify Forms or an API route without touching the form UI.
export function submitContactForm(data: ContactFormData) {
  window.location.href = buildMailtoUrl(data);
}
