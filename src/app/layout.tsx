import type { Metadata } from "next";
import I18nProvider from "@/lib/I18nProvider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "St. James's Place | One to One Financial Advice",
  description:
    "St. James's Place Wealth Management - One to one financial advice tailored to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
