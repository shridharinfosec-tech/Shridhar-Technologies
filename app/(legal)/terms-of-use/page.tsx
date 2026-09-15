import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { getLegalPage } from "@/data/legal";

const page = getLegalPage("terms-of-use")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.intro,
  alternates: { canonical: `/${page.slug}` },
};

export default function TermsOfUsePage() {
  return <LegalPageLayout page={page} />;
}
