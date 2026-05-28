import { contactEmail, individualLearningTracks, offers, siteUrl } from "./site";

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export const organizationSchema = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": organizationId,
  name: "Verdantia",
  legalName: "Verdantia Limited",
  url: siteUrl,
  email: contactEmail,
  logo: `${siteUrl}/assets/verdantia-icon-512.png`,
  image: `${siteUrl}/assets/verdantia-og.jpg`,
  description:
    "Verdantia is a founder-led practical AI training and adoption practice helping teams turn scattered AI use into safer, repeatable workflows.",
  founder: {
    "@type": "Person",
    name: "Oluwagbemi Enoch Akadiri",
    alternateName: "Gbemi Akadiri",
  },
  knowsAbout: [
    "AI training",
    "AI adoption",
    "Microsoft Copilot enablement",
    "prompt engineering",
    "workflow design",
    "responsible AI use",
  ],
  areaServed: [
    { "@type": "Country", name: "Ireland" },
    { "@type": "Place", name: "Remote delivery" },
  ],
} as const;

export const websiteSchema = {
  "@type": "WebSite",
  "@id": websiteId,
  name: "Verdantia",
  url: siteUrl,
  publisher: { "@id": organizationId },
  inLanguage: "en-IE",
} as const;

export function graphSchema(nodes: readonly unknown[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const url = `${siteUrl}${path === "/" ? "" : path}`;

  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    inLanguage: "en-IE",
  };
}

export const offerCatalogSchema = {
  "@type": "OfferCatalog",
  name: "Verdantia AI training and adoption offers",
  url: `${siteUrl}/offers`,
  provider: { "@id": organizationId },
  itemListElement: offers.map((offer) => ({
    "@type": "Offer",
    name: offer.title,
    description: offer.summary,
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EUR",
      description: offer.price,
    },
    itemOffered: {
      "@type": "Service",
      name: offer.title,
      serviceType: "AI training and adoption support",
      description: offer.summary,
      provider: { "@id": organizationId },
      areaServed: organizationSchema.areaServed,
    },
  })),
} as const;

export const learningCourseSchemas = individualLearningTracks.map((track) => ({
  "@type": "Course",
  name: track.title,
  description: track.outcome,
  provider: { "@id": organizationId },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EUR",
      description: track.price,
    },
  },
}));

export const founderPersonSchema = {
  "@type": "Person",
  name: "Oluwagbemi Enoch Akadiri",
  alternateName: "Gbemi Akadiri",
  jobTitle: "Founder and lead trainer",
  worksFor: { "@id": organizationId },
  knowsAbout: [
    "AI consulting",
    "AI training",
    "Microsoft Copilot enablement",
    "prompt engineering",
    "workflow design",
    "practical AI adoption",
  ],
} as const;

export const contactPageSchema = {
  "@type": "ContactPage",
  name: "Contact Verdantia",
  url: `${siteUrl}/contact`,
  mainEntity: {
    "@type": "Organization",
    "@id": organizationId,
    contactPoint: {
      "@type": "ContactPoint",
      email: contactEmail,
      contactType: "AI training and adoption enquiries",
      availableLanguage: ["en-IE", "en"],
    },
  },
} as const;

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
