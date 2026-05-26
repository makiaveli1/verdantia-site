import type { Metadata, Viewport } from "next";
import { Cinzel, Montserrat, Newsreader } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const logo = Cinzel({
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Verdantia",
  title: {
    default: "Verdantia | Practical AI Training & Adoption Support",
    template: "%s",
  },
  description:
    "Verdantia helps Ireland and UK teams move from scattered AI experiments to safe, practical, repeatable AI workflows through briefings, workshops, adoption days, and adoption sprints.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/verdantia-icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/assets/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F1E8" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1511" },
  ],
  colorScheme: "light dark",
};

const themeInitScript = `
(function () {
  var storageKey = "verdantia-theme";
  var validChoices = { light: true, dark: true, system: true };
  var choice = "system";

  try {
    var stored = window.localStorage.getItem(storageKey);
    if (stored && validChoices[stored]) choice = stored;
  } catch (error) {}

  var resolved = choice;
  if (choice === "system") {
    resolved = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themeChoice = choice;
  document.documentElement.style.colorScheme = resolved;
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IE"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} ${logo.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script
          id="verdantia-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
