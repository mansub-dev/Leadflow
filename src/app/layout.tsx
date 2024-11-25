import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leadflow",
  description: "A CRM System"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
