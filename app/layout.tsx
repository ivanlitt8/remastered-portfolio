import "./globals.css";
import { TaskProvider } from "@/context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>{children}</TaskProvider>
      </body>
    </html>
  );
}
