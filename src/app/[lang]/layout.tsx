import "./globals.css";
import { NavBar } from "@/components/NavBar/NavBar";
import { ThemeProviderWrapped } from "@/components/ThemeProvider/ThemeProvider";
import { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { cn } from "@/utils/utils";
import { Footer } from "@/components/Footer/Footer";

import { Locale, i18n } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import DictionaryProvider from "@/components/DictionaryProvider/DictionaryProvider";

const baseFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  // adjustFontFallback: false,
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains_mono",
  // adjustFontFallback: false,
});

// this is just the variables (not actually applying the fonts) (we apply it in globals.css)
const customFonts = [baseFont.variable, monoFont.variable].join(" ");

export const metadata: Metadata = {
  title: "Saison De Aoyama",
  description: "Hair Salon",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
export type LParam = { lang: Locale };

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LParam;
}) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={cn(
        customFonts,
        // layout defaults:
        "flex flex-col h-full overflow-hidden"
      )}
      suppressHydrationWarning // see https://github.com/pacocoursey/next-themes/issues/152#issuecomment-1364280564 for details
    >
      <body
        // className="relative isolate bg-white dark:bg-neutral-800 m-0"
        className={cn(
          // layout defaults:
          "relative flex flex-col flex-1 overflow-x-hidden overflow-y-scroll isolate scroll-smooth",
          // style defaults:
          "font-base",
          // light:
          "text-zinc-900 bg-white selection:bg-zinc-900 selection:text-white",
          // dark:
          "dark:text-white dark:bg-zinc-900 dark:selection:bg-white dark:selection:text-black"
        )}
      >
        <ThemeProviderWrapped>
          <DictionaryProvider value={dictionary}>
            <header className="sticky top-0 flex flex-col w-full">
              <NavBar />
            </header>
            <main className="-z-10 isolate flex-1">{children}</main>
            <footer className="-z-20 isolate ">
              <Footer />
            </footer>
          </DictionaryProvider>
        </ThemeProviderWrapped>
      </body>
    </html>
  );
}
