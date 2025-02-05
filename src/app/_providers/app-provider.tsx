"use client";

import { ComposeChildren } from "@/shared/lib/react";
import { ThemeProvider } from "../../entities/theme/theme-provider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <ThemeProvider />
      {children}
    </ComposeChildren>
  );
}
