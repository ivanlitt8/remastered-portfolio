"use client";

import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import "../next-i18next.config";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <ThemeProvider>{children}</ThemeProvider>
    </html>
  );
}
