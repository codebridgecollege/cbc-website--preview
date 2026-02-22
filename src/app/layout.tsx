import type { Metadata } from "next";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import SharedShell from "@/components/landing/SharedShell";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "CodeBridge College | Become Fluent in Data",
  description:
    "Intensive data science courses for the academic elite and business professionals.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${spaceMono.variable} antialiased selection:bg-brand-blue selection:text-white`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SharedShell>{children}</SharedShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
