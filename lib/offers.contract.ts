import { enquiryTypes, offerPages, offers, videoAdOffer } from "@/lib/site";

type EnquiryType = (typeof enquiryTypes)[number];
type TeamOffer = (typeof offers)[number];

type Assert<T extends true> = T;

type NormalizedOfferContract = {
  slug: string;
  path: `/offers/${string}`;
  href: `/offers/${string}`;
  contactHref: string;
  enquiryType: EnquiryType;
  detail: {
    seo: {
      title: string;
      description: string;
    };
    hero: {
      kicker: string;
      title: string;
      body: string;
      meta: readonly string[];
      asset: string;
    };
  };
};

export type OffersExposeNormalizedDetailFields = Assert<TeamOffer extends NormalizedOfferContract ? true : false>;
export type VideoOfferExposesNormalizedFields = Assert<typeof videoAdOffer extends NormalizedOfferContract ? true : false>;

const normalizedOffers = offerPages;

normalizedOffers.forEach((offer) => {
  if (!offer.path.startsWith("/offers/")) {
    throw new Error(`${offer.title} path must stay under /offers/`);
  }

  if (offer.href !== offer.path) {
    throw new Error(`${offer.title} href must match path`);
  }

  const expectedContactHref = `/contact?enquiryType=${encodeURIComponent(offer.enquiryType)}`;
  if (offer.contactHref !== expectedContactHref) {
    throw new Error(`${offer.title} contactHref must use its exact enquiryTypes value`);
  }
});
