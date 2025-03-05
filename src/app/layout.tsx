import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "To do List",
  description: "TODO LIST ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
