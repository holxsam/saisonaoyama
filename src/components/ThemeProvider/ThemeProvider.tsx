"use client";

import { useHasMounted } from "@/hooks/useHasMounted";
import { ThemeProvider } from "next-themes";

type ProvidersProps = {
  children: React.ReactNode;
};

export function ThemeProviderWrapped({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
