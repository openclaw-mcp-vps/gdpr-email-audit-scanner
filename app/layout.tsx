import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Email Audit Scanner – Scan Emails for GDPR Compliance Issues",
  description: "Analyze your email marketing campaigns for GDPR violations and get actionable fix recommendations. Stay compliant and protect your business."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2e366c12-4eac-4d99-8ebf-2e32e19e57c2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
