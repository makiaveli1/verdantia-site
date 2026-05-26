import type { CSSProperties } from "react";
import Link from "next/link";
import { offers } from "@/lib/site";

type OfferLadderProps = {
  context?: "home" | "offers";
};

export function OfferLadder({ context = "home" }: OfferLadderProps) {
  return (
    <div className={`premium-offer-ladder premium-offer-ladder-${context}`}>
      <div className="ladder-rail" aria-hidden="true">
        {offers.map((offer, index) => (
          <span key={offer.title} style={{ "--rail-index": index } as CSSProperties} />
        ))}
      </div>

      <div className="ladder-grid" role="list" aria-label="Verdantia offer ladder">
        {offers.map((offer, index) => (
          <article className="ladder-offer" key={offer.title} role="listitem">
            <div className="ladder-offer-topline">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{offer.level}</span>
            </div>
            <h3>{offer.title}</h3>
            <p>{offer.summary}</p>

            <dl className="ladder-offer-meta">
              <div>
                <dt>Time</dt>
                <dd>{offer.duration}</dd>
              </div>
              <div>
                <dt>Guide price</dt>
                <dd>{offer.price}</dd>
              </div>
            </dl>

            <div className="ladder-fit-note">
              <span>Choose this when</span>
              <p>{offer.bestWhen}</p>
            </div>

            <div className="ladder-leave-note">
              <span>Team leaves with</span>
              <p>{offer.leaveWith}</p>
            </div>

            <ul aria-label={`${offer.title} deliverables`}>
              {offer.outputs.map((output) => (
                <li key={output}>{output}</li>
              ))}
            </ul>

            <Link
              className="ladder-link"
              href={`/contact?enquiryType=${encodeURIComponent(offer.title)}`}
              aria-label={`Start an enquiry about ${offer.title}`}
            >
              {offer.ctaLabel}
              <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
                <path d="M6.2 3.2 12 9l-5.8 5.8" />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
