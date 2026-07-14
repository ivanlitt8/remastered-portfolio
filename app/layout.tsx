"use client";

import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import AppShell from "@/components/AppShell";
import "../next-i18next.config";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-primaryLight">
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
