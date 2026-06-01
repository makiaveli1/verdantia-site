"use client";

import type { CSSProperties } from "react";
import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site";
import { BrandMark } from "./BrandMark";

type ThemeChoice = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

const themeStorageKey = "verdantia-theme";
const themeChangeEvent = "verdantia-theme-change";
const themeOptions: Array<{ value: ThemeChoice; label: string }> = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];
const themeCycle: ThemeChoice[] = ["system", "light", "dark"];

function isThemeChoice(value: string | null): value is ThemeChoice {
  return value === "light" || value === "dark" || value === "system";
}

function resolveTheme(choice: ThemeChoice): ResolvedTheme {
  if (choice !== "system") return choice;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(choice: ThemeChoice, animate = false) {
  const root = document.documentElement;
  const resolved = resolveTheme(choice);

  if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    root.classList.add("theme-transition");
    window.setTimeout(() => root.classList.remove("theme-transition"), 460);
  }

  root.dataset.theme = resolved;
  root.dataset.themeChoice = choice;
  root.style.colorScheme = resolved;
}

function readStoredTheme(): ThemeChoice {
  try {
    const stored = window.localStorage.getItem(themeStorageKey);
    return isThemeChoice(stored) ? stored : "system";
  } catch {
    return "system";
  }
}

function writeStoredTheme(choice: ThemeChoice) {
  try {
    window.localStorage.setItem(themeStorageKey, choice);
  } catch {}
}

function ThemeIcon({ choice }: { choice: ThemeChoice }) {
  if (choice === "light") {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
        <circle cx="10" cy="10" r="3.2" />
        <path d="M10 1.8v2.1M10 16.1v2.1M1.8 10h2.1M16.1 10h2.1M4.2 4.2l1.5 1.5M14.3 14.3l1.5 1.5M15.8 4.2l-1.5 1.5M5.7 14.3l-1.5 1.5" />
      </svg>
    );
  }

  if (choice === "dark") {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
        <path d="M15.8 12.5A6.7 6.7 0 0 1 7.5 4.2 6.9 6.9 0 1 0 15.8 12.5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="7.1" />
      <path d="M10 2.9a7.1 7.1 0 0 1 0 14.2Z" />
    </svg>
  );
}

function getThemeSnapshot(): ThemeChoice {
  if (typeof document === "undefined") return "system";

  const currentChoice = document.documentElement.dataset.themeChoice ?? null;
  return isThemeChoice(currentChoice) ? currentChoice : readStoredTheme();
}

function getThemeServerSnapshot(): ThemeChoice {
  return "system";
}

function emitThemeChange() {
  window.dispatchEvent(new Event(themeChangeEvent));
}

function subscribeTheme(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  const handleThemeChange = () => onStoreChange();
  const handleSystemChange = () => {
    if (getThemeSnapshot() === "system") applyTheme("system", true);
    onStoreChange();
  };
  const handleStorageChange = () => {
    applyTheme(readStoredTheme(), true);
    onStoreChange();
  };

  window.addEventListener(themeChangeEvent, handleThemeChange);
  window.addEventListener("storage", handleStorageChange);
  media.addEventListener("change", handleSystemChange);

  return () => {
    window.removeEventListener(themeChangeEvent, handleThemeChange);
    window.removeEventListener("storage", handleStorageChange);
    media.removeEventListener("change", handleSystemChange);
  };
}

function ThemeToggle({ placement }: { placement: "floating" }) {
  const choice = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot,
  );
  const activeLabel = themeOptions.find((option) => option.value === choice)?.label ?? "System";
  const nextChoice = themeCycle[(themeCycle.indexOf(choice) + 1) % themeCycle.length] ?? "system";
  const nextLabel = themeOptions.find((option) => option.value === nextChoice)?.label ?? "System";

  useEffect(() => {
    applyTheme(readStoredTheme());
    emitThemeChange();
  }, []);

  return (
    <button
      type="button"
      className={`theme-toggle theme-toggle-${placement}`}
      data-theme-toggle
      data-theme-choice={choice}
      aria-label={`Switch colour theme. Current: ${activeLabel}. Next: ${nextLabel}.`}
      title={`Theme: ${activeLabel}. Click for ${nextLabel}.`}
      onClick={() => {
        applyTheme(nextChoice, true);
        writeStoredTheme(nextChoice);
        emitThemeChange();
      }}
    >
      <span className="theme-icon" aria-hidden="true">
        <ThemeIcon choice={choice} />
      </span>
      <span className="sr-only">{activeLabel}</span>
    </button>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isHome = pathname === "/";

  function isNavItemActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href === "/offers") return pathname === "/offers" || pathname.startsWith("/offers/");
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className={`site-header ${isHome ? "site-header-home" : "site-header-inner-page"} ${isOpen ? "is-menu-open" : ""}`}>
        <div className="shell header-inner">
          <Link className="brand-link" href="/" aria-label="Verdantia home">
            <BrandMark className="brand-mark" />
            <span className="brand-copy">
              <span className="brand-word">Verdantia</span>
              <span className="brand-subline">Practical AI training</span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => {
              const isActive = isNavItemActive(item.href);
              return (
                <Link key={item.href} href={item.href} aria-current={isActive ? "page" : undefined}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <Link className="header-cta" href="/contact">
              <span>Request a practical AI call</span>
            </Link>

            <button
              className="mobile-nav-trigger"
              type="button"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((current) => !current)}
            >
              <span>Menu</span>
              <i aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className={isOpen ? "mobile-panel is-open" : "mobile-panel"}
          id="mobile-navigation"
          aria-hidden={!isOpen}
          inert={!isOpen}
        >
          <div className="shell mobile-panel-inner">
            <nav aria-label="Mobile navigation">
              {navItems.map((item, index) => {
                const isActive = isNavItemActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    style={{ "--link-index": index } as CSSProperties}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link className="mobile-cta" href="/contact" onClick={() => setIsOpen(false)}>
              Request a practical AI call
            </Link>
          </div>
        </div>
      </header>

      <div className="theme-dock">
        <ThemeToggle placement="floating" />
      </div>
    </>
  );
}
