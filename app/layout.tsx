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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
