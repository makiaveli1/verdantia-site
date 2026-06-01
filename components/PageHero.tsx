import Image from "next/image";
import type { ReactNode } from "react";
import { EditorialImage } from "@/components/EditorialImage";
import { routeHeroAssetKeys } from "@/lib/assets";

type PageHeroProps = {
  title: string;
  kicker?: string;
  meta?: readonly string[];
  visual?: "capabilities" | "products" | "company" | "contact";
  asset?: keyof typeof routeHeroAssetKeys;
  assetSrc?: string;
  assetAlt?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export function PageHero({
  title,
  kicker,
  meta,
  visual = "capabilities",
  asset,
  assetSrc,
  assetAlt = "",
  actions,
  children,
}: PageHeroProps) {
  const heroAssetKey = asset ? routeHeroAssetKeys[asset] : null;

  return (
    <section className={`page-hero page-hero-${visual}`}>
      <div className="shell page-hero-inner">
        <div className="page-hero-heading">
          {kicker ? <p className="eyebrow">{kicker}</p> : null}
          <h1>{title}</h1>
        </div>
        <div className="page-hero-copy">
          {children}
          {meta ? (
            <ul className="page-hero-meta" aria-label="Page highlights">
              {meta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {actions ? <div className="page-hero-actions">{actions}</div> : null}
        </div>
        <div className="page-hero-visual">
          {assetSrc ? (
            <Image
              className="page-hero-visual-image"
              src={assetSrc}
              alt={assetAlt}
              fill
              priority
              sizes="(max-width: 760px) 100vw, (max-width: 1120px) 92vw, 60vw"
            />
          ) : heroAssetKey ? (
            <EditorialImage
              assetKey={heroAssetKey}
              imageClassName="page-hero-visual-image"
              fill
              priority
              sizes="(max-width: 760px) 100vw, (max-width: 1120px) 92vw, 60vw"
            />
          ) : null}
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <svg viewBox="0 0 420 240" aria-hidden="true" focusable="false">
            <path d="M36 172c72-80 144-112 216-96 58 13 82 62 136 28" />
            <path d="M82 180c72-62 192-62 264 0" />
          </svg>
        </div>
      </div>
    </section>
  );
}
