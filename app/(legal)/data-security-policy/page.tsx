import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { getLegalPage } from "@/data/legal";

const page = getLegalPage("data-security-policy")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.intro,
};

export default function DataSecurityPolicyPage() {
  return <LegalPageLayout page={page} />;
}
