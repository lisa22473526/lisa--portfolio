import type { Metadata } from "next";
import "./globals.css";
import GoTop from "./components/go-top";

export const metadata: Metadata = {
  title: "Lisa Huang — Product Designer & AI Builder",
  description: "Human-centered product design, creative direction, and AI-powered digital experiences."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}<GoTop /></body>
    </html>
  );
}
