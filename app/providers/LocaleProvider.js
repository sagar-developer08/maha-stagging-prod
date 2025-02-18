"use client";

import { usePathname, useRouter } from "next/navigation";

const locales = ["en", "ar"];

export default function LocaleProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (locale) => {
    if (!locales.includes(locale)) return;

    const newPath = `/${locale}${pathname.replace(/^\/(en|ar)/, "")}`;
    router.push(newPath);
  };

  return <>{children}</>;
}
