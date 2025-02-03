import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/shared/lib/utils";
import { AppHeader } from "@/widgets/app-header/app-header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans-serif",
});

export const metadata: Metadata = {
  title: "School notebook",
  description: "Учимся и играем",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
