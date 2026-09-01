export type LegalSection = {
  heading: string;
  body: string[];
};

export type LegalPage = {
  slug: "privacy-policy" | "terms-of-use" | "data-security-policy";
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    lastUpdated: "August 30, 2026",
    intro:
      "This Privacy Policy explains how Shridhar Technologies (\"we\", \"us\", \"ST\") collects, uses, and protects information in connection with this website and our services.",
    sections: [
      {
        heading: "Information We May Collect",
        body: [
          "We may collect information you provide directly to us, including your name, email address, phone number, and company name when you contact us through our website, request a quote, or otherwise communicate with us.",
          "We may also collect limited billing information in connection with client engagements; we do not store full payment card details on our own systems. In addition, we automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, and pages visited.",
        ],
      },
      {
        heading: "How We Collect Information",
        body: [
          "We collect information through the forms on our website (such as the contact form), through direct email or phone communication, and automatically through standard web technologies as you browse our site.",
          "Where analytics tools are used, they are limited to aggregate, non-identifying usage patterns intended to help us improve the website.",
        ],
      },
      {
        heading: "How We Use Your Information",
        body: [
          "We use the information we collect to respond to your inquiries, deliver the services you've engaged us for, improve our website and services, and maintain the security of our systems.",
          "We do not generate any advertising revenue from personal information collected through this website, and we do not sell your personal information to third parties.",
        ],
      },
      {
        heading: "How We Share Information",
        body: [
          "We do not sell your personal information. We may share information with trusted third parties who assist us in operating our website or delivering services to you, under confidentiality obligations consistent with this policy, or where required to do so by law or in response to valid legal process.",
        ],
      },
      {
        heading: "Grievance Officer",
        body: [
          "In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, the contact details of our Grievance Officer are provided below. If you have concerns about how your personal information has been handled, you may reach out using the details below and we will respond within the timeframe required by applicable law.",
          "Grievance Officer - Shridhar Technologies, B-338, Emerald One, Jetalpur Road, Vadodara, Gujarat, India - 390007. Email: info@shridharinfosec.com | Phone: +91 932-866-7642.",
        ],
      },
      {
        heading: "Jurisdiction",
        body: [
          "This policy and any disputes arising from it are governed by the laws of India, and are subject to the exclusive jurisdiction of the courts located in Gujarat, India.",
        ],
      },
      {
        heading: "Confidentiality & Security",
        body: [
          "We take reasonable administrative, technical, and physical measures designed to protect the personal information we hold from unauthorized access, disclosure, alteration, or destruction. No method of transmission or storage is completely secure, and we cannot guarantee absolute security, but we work to apply safeguards appropriate to the sensitivity of the information involved.",
        ],
      },
      {
        heading: "GDPR Compliance",
        body: [
          "For visitors located in the European Economic Area, we aim to process personal information in accordance with the General Data Protection Regulation (GDPR) where applicable, including the principles of lawfulness, purpose limitation, data minimization, and accountability.",
        ],
      },
      {
        heading: "Your Rights Under GDPR",
        body: [
          "If GDPR applies to you, you have the right to request access to, correction of, or deletion of your personal information, to object to or restrict certain processing, and to request portability of your data. To exercise any of these rights, please contact us using the details in the Grievance Officer section above.",
        ],
      },
      {
        heading: "IP Address",
        body: [
          "We may log IP addresses as part of standard website operation and security monitoring. IP addresses are used for purposes such as diagnosing technical issues, maintaining security, and understanding aggregate website usage, and are not used to personally identify individual visitors beyond what is reasonably necessary for these purposes.",
        ],
      },
      {
        heading: "Cookie Policy",
        body: [
          "This website currently uses only essential cookies required for basic site functionality; we do not currently deploy third-party advertising or analytics tracking cookies. If this changes in the future, this policy will be updated accordingly and, where required, we will seek your consent before deploying non-essential cookies.",
        ],
      },
      {
        heading: "Privacy & Data Consent",
        body: [
          "By using our website and voluntarily submitting information to us, you consent to the collection and use of that information as described in this policy. Where consent is the legal basis for processing under applicable law, you may withdraw that consent at any time by contacting us.",
        ],
      },
      {
        heading: "Changes to This Policy",
        body: [
          "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal or operational reasons. The \"Last updated\" date at the top of this page indicates when this policy was last revised. We encourage you to review this page periodically.",
        ],
      },
    ],
  },
  {
    slug: "terms-of-use",
    title: "Terms of Use",
    lastUpdated: "August 30, 2026",
    intro:
      "These Terms of Use govern your access to and use of the Shridhar Technologies website. Please read them carefully.",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: [
          "By accessing or using the Shridhar Technologies website, you agree to be bound by these Terms of Use and by our Privacy Policy. We reserve the right to update these terms periodically; continued use of the website after changes are posted signifies your acceptance of the current version.",
        ],
      },
      {
        heading: "Information on This Website",
        body: [
          "Content on this website is presented for general informational purposes about our services. While we strive for accuracy, we provide no warranties about its completeness or suitability for any particular purpose. All materials are provided on an \"as is\" basis, and we reserve the right to modify or update the content at any time without notice.",
        ],
      },
      {
        heading: "Intellectual Property",
        body: [
          "All content on this website - including text, graphics, logos, images, layout, and design - is the property of Shridhar Technologies or its licensors. You may view and print pages from this website for personal, non-commercial use, provided you retain all copyright and proprietary notices. Commercial reproduction or redistribution requires our prior written authorization.",
        ],
      },
      {
        heading: "Acceptable Use",
        body: [
          "You agree to use this website only for lawful purposes and in a manner consistent with these terms. You must not attempt to gain unauthorized access to the website, its servers, or any connected systems, introduce malicious code, or engage in any activity that could damage, disable, or impair the website or interfere with any other party's use of it.",
        ],
      },
      {
        heading: "Confidentiality of Communications",
        body: [
          "Information you voluntarily submit through this website (for example, through our contact form) is not automatically treated as confidential or privileged. We recommend not transmitting highly sensitive or proprietary information through the website until a formal engagement and appropriate confidentiality arrangements are in place.",
        ],
      },
      {
        heading: "Links to Other Websites",
        body: [
          "This website may contain links to third-party websites, including our sister company Shridhar InfoSec Solutions, provided for your convenience. These links do not constitute an endorsement, and we are not responsible for the content, accuracy, security, or privacy practices of those external sites.",
        ],
      },
      {
        heading: "No Warranties",
        body: [
          "This website and its content are provided without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. Descriptions of our services on this website are informational and do not constitute a guarantee of specific outcomes.",
        ],
      },
      {
        heading: "Limitation of Liability",
        body: [
          "To the fullest extent permitted by law, Shridhar Technologies shall not be liable for any direct, indirect, incidental, consequential, or other damages arising from your access to or use of, or inability to access or use, this website. Nothing on this website should be treated as a substitute for a formal engagement scope or professional consultation.",
        ],
      },
      {
        heading: "Governing Law & Jurisdiction",
        body: [
          "These Terms of Use are governed by the laws of India, and any disputes arising from them are subject to the exclusive jurisdiction of the courts located in Gujarat, India.",
        ],
      },
      {
        heading: "Feedback & Contact",
        body: [
          "If you have questions about these Terms of Use, please contact us at info@shridharinfosec.com or +91 932-866-7642.",
        ],
      },
    ],
  },
  {
    slug: "data-security-policy",
    title: "Data & Information Security Policy",
    lastUpdated: "August 30, 2026",
    intro:
      "This policy sets out how Shridhar Technologies protects the confidentiality, integrity, and availability of information across our organization and client engagements.",
    sections: [
      {
        heading: "Purpose & Scope",
        body: [
          "This Data & Information Security Policy sets out how Shridhar Technologies (\"ST\") protects the confidentiality, integrity, and availability of information - both our own and that entrusted to us by our clients. It applies to all employees, contractors, systems, applications, and data assets across the organization.",
        ],
      },
      {
        heading: "Our Security Commitment",
        body: [
          "We are committed to safeguarding information against unauthorized access, disclosure, modification, loss, or misuse. Security is not just a practice we apply to client engagements - it is a principle we live by internally, across every system we operate and every line of code we ship.",
        ],
      },
      {
        heading: "Governance & Framework",
        body: [
          "Our security program draws on ISO/IEC 27001 for information security management and risk-based controls, and on SOC 2 principles for the security, availability, and confidentiality of client data. Where applicable to a given engagement, we align with relevant regulatory requirements, including India's Digital Personal Data Protection Act, 2023 and GDPR, with defined roles and accountability throughout the organization.",
        ],
      },
      {
        heading: "Data Classification & Handling",
        body: [
          "Information is classified according to its sensitivity and handled with controls appropriate to that classification. Client source code, credentials, and confidential business information are subject to our strictest protection standards.",
        ],
      },
      {
        heading: "Access Control",
        body: [
          "We enforce the principle of least privilege: access to systems and data is restricted to what is necessary for a given role, protected through strong authentication and multi-factor authentication where appropriate.",
        ],
      },
      {
        heading: "Encryption & Technical Safeguards",
        body: [
          "Sensitive data is encrypted in transit and, where appropriate, at rest. We maintain secure network architecture, firewalls, endpoint protection, hardened configurations, and timely patching across the systems we operate and the client systems we manage.",
        ],
      },
      {
        heading: "Threat & Vulnerability Management",
        body: [
          "We proactively identify and remediate weaknesses through vulnerability assessments, code review practices, and continuous monitoring, engaging our sister firm Shridhar InfoSec Solutions for independent penetration testing where an engagement calls for it.",
        ],
      },
      {
        heading: "Incident Response",
        body: [
          "We maintain a defined incident response process to detect, contain, investigate, and recover from security incidents, with prompt notification procedures for any incident affecting client data or personal information, consistent with our legal obligations.",
        ],
      },
      {
        heading: "People & Awareness",
        body: [
          "All employees and contractors are bound by confidentiality obligations and receive regular security awareness training covering phishing, safe data handling, password hygiene, and secure coding practices relevant to their role.",
        ],
      },
      {
        heading: "Third-Party & Vendor Security",
        body: [
          "We assess the security posture of third-party providers and subcontractors before engaging them on client work, requiring appropriate safeguards and confidentiality commitments consistent with this policy.",
        ],
      },
      {
        heading: "Business Continuity & Backup",
        body: [
          "We maintain backup and recovery measures and business continuity arrangements designed to ensure the availability of critical information and services, both for our own operations and for the systems we manage on behalf of clients.",
        ],
      },
      {
        heading: "Continuous Improvement",
        body: [
          "Information security is an ongoing commitment, not a fixed state. We conduct regular internal reviews, incorporate lessons learned from audits and engagements, and adapt this policy as threats, technologies, and regulatory requirements evolve.",
        ],
      },
    ],
  },
];

export function getLegalPage(slug: string): LegalPage | undefined {
  return legalPages.find((page) => page.slug === slug);
}
