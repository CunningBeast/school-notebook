"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }: { children?: React.ReactNode }) {
  const [isMounted, setIsMounded] = useState(false);

  useEffect(() => {
    setIsMounded(true);
  }, []);

  if (!isMounted) {
    return <></>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
