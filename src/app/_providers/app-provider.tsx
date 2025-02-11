"use client";

import { ComposeChildren } from "@/shared/lib/react";
import { ThemeProvider } from "../../entities/theme/theme-provider";
import { AppSessionProvider } from "@/entities/session/app-session-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/api/query-client";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <ThemeProvider />
      <AppSessionProvider />
      <QueryClientProvider client={queryClient} />
      {children}
    </ComposeChildren>
  );
}
