"use client";

import { useHasMounted } from "@/hooks/useHasMounted";

export const Mounted = ({ children }: { children: React.ReactNode }) => {
  const mounted = useHasMounted();

  if (!mounted) return <></>;
  return children;
};
