import enData from "@/messages/en.json";

export type SiteContent = typeof enData;

/**
 * Global site content configuration - single source of truth.
 * All text, links, company details, navigation, species data, products,
 * FAQ, and contact info are defined in messages/en.json.
 */
export const siteContent: SiteContent = enData;

export const company = siteContent.company;
export const nav = siteContent.nav;
export const topBar = siteContent.topBar;
export const hero = siteContent.hero;
export const speciesList = siteContent.species.items;
export const productsList = siteContent.products.items;
export const logistics = siteContent.exportLogistics;
export const sourcing = siteContent.sourcing;
export const about = siteContent.about;
export const faq = siteContent.faq;
export const cta = siteContent.cta;
export const contact = siteContent.contact;
export const footer = siteContent.footer;

export default siteContent;
