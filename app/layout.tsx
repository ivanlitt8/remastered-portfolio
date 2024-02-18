import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <ThemeProvider>{children}</ThemeProvider>
    </html>
  );
}
