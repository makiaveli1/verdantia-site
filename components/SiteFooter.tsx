import Link from "next/link";
import { contactEmail, navItems } from "@/lib/site";
import { BrandMark } from "./BrandMark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link className="brand-link footer-brand-link" href="/">
            <BrandMark className="brand-mark" />
            <span>Verdantia</span>
          </Link>
          <p>Verdantia Limited — Practical AI training and adoption support.</p>
          <p className="footer-line">Practical AI training for safer team adoption.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer-contact">
          <span>Practical AI training, learning, and adoption support.</span>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Verdantia Limited.</span>
        <span>Built for teams who want AI to become useful, safe, and easier to govern.</span>
      </div>
    </footer>
  );
}
