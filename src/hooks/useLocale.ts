"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Locale, i18n } from "../../i18n-config";

export default function useLocale(): Locale {
  const params = useParams();
  const locale = params.lang ? (params.lang as Locale) : i18n.defaultLocale;

  return locale;
}
