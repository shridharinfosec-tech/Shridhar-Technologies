import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { getLegalPage } from "@/data/legal";

const page = getLegalPage("privacy-policy")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.intro,
  alternates: { canonical: `/${page.slug}` },
};

export default function PrivacyPolicyPage() {
  return <LegalPageLayout page={page} />;
}
