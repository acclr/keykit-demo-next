"use client";

import { useTranslate } from "@keykithq/sdk/react";

const localeLabels: Record<string, string> = {
  sv: "Svenska",
  en: "English",
};

const localeCookie = "keykit-locale";

function persistLocale(locale: string) {
  document.cookie = `${encodeURIComponent(localeCookie)}=${encodeURIComponent(locale)}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function LocaleSwitcher({ locales }: { locales: readonly string[] }) {
  const { locale, setLocale, t } = useTranslate();

  return (
    <nav aria-label={t("locale.switcher", "Language")}>
      <ul className="flex gap-1 rounded-full border border-black/[.08] bg-white p-1 dark:border-white/[.145] dark:bg-black">
        {locales.map((code) => {
          const selected = locale === code;

          return (
            <li key={code}>
              <button
                type="button"
                lang={code}
                aria-pressed={selected}
                onClick={() => {
                  if (selected) return;
                  void setLocale(code).catch(() => {
                    persistLocale(code);
                    window.location.reload();
                  });
                }}
                className={
                  selected
                    ? "rounded-full bg-foreground px-3 py-1 text-sm font-medium text-background"
                    : "rounded-full px-3 py-1 text-sm font-medium text-zinc-600 transition-colors hover:bg-black/[.04] hover:text-black dark:text-zinc-400 dark:hover:bg-[#1a1a1a] dark:hover:text-zinc-50"
                }
              >
                {localeLabels[code] ?? code}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
