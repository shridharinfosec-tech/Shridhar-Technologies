import { siteConfig } from "@/data/siteConfig";

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  launch: string;
  message: string;
};

// Web3Forms relays each submission to the inbox tied to the access key. It is
// a plain client-side POST, so it works on the static export and on Vercel.
// Set NEXT_PUBLIC_WEB3FORMS_KEY in the hosting environment (the key is public
// by design; Web3Forms restricts it to the configured domain and inbox).
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!accessKey) {
    throw new Error("Contact form is not configured: NEXT_PUBLIC_WEB3FORMS_KEY is missing.");
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New enquiry from ${data.name} | ${siteConfig.name}`,
      from_name: siteConfig.name,
      replyto: data.email,
      Name: data.name,
      Email: data.email,
      Phone: data.phone || "Not given",
      Company: data.company || "Not given",
      "What are you building": data.projectType || "Not given",
      "Budget range": data.budget || "Not given",
      "Launch window": data.launch || "Not given",
      Message: data.message,
    }),
  });

  const result: { success?: boolean; message?: string } | null = await response
    .json()
    .catch(() => null);

  if (!response.ok || !result?.success) {
    throw new Error(result?.message ?? `Contact form request failed (${response.status}).`);
  }
}
