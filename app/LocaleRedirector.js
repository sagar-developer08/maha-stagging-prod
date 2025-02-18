"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const LocaleRedirector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  useEffect(() => {
    if (!locale) {
      router.replace("/en"); // Redirect to /en if no local
    }
  }, [locale, router]);

  return null; // This component doesn't render anything
};

export default LocaleRedirector;
