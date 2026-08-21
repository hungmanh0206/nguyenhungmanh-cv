import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyễn Hùng Mạnh | QA Engineer & AI Testing",
  description:
    "Web CV song ngữ của Nguyễn Hùng Mạnh, IT Tester và QA Engineer định hướng AI Testing.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nguyễn Hùng Mạnh",
  alternateName: "Nguyen Hung Manh",
  jobTitle: "QA Engineer",
  email: "mailto:hungmanh0206@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hanoi",
    addressCountry: "VN",
  },
  sameAs: ["https://www.linkedin.com/in/nguyen-hung-manh-97316117b/"],
  url: "https://nguyenhungmanh-cv.vercel.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
