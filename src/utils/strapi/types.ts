export interface TeamMember {
  id: string;
  name: string;
  bio: string;
  pronouns: string;
  profile: StrapiMedia;
  roles: TeamMemberRole[];
}

export interface StrapiMedia {
  url: string;
}

export interface TeamMemberRole {
  title: string;
  type: TeamMemberRoleType;
}

export type TeamMemberRoleType =
  | "director"
  | "board member"
  | "coordinator"
  | "volunteer";

export interface ResponseNavigationItem {
  id: number;
  name: string;
  slug: string;
}

export interface ResponseOverview extends ResponseNavigationItem {
  description?: string | null;
  subHeading?: string | null;
  aboutHeading?: string | null;
  processHeading?: string | null;
  processFootnote?: string | null;
  imageGallery?: ResponseImage[] | null;
  processImageMobile?: StrapiUpload | null;
  processImageDesktop?: StrapiUpload | null;
  impactStatistics?: ResponseImpactStatistics | null;
  details?: ResponseDetail[] | null;
  callToActionCards?: ResponseCallToAction[] | null;
  faqs?: ResponseFaq[] | null;
}

export interface ResponseImage {
  id: number;
  imageURL: string;
  altText: string | null;
  attributionName: string | null;
  attributionURL: string | null;
}

export interface StrapiUpload {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

export interface ResponseCallToAction {
  id: number;
  title: string;
  description: string | null;
  imageLink: string | null;
  imageAltText: string | null;
  imageAttributionName: string | null;
  imageAttributionURL: string | null;
  buttonText: string | null;
  buttonLink: string | null;
}

export interface ResponseFaq {
  id: number;
  question: string;
  answer: string;
}

export interface ResponseDetail {
  id: number;
  summary: string | null;
  specifics: string | null;
}

export interface ResponseImpactStatistics {
  id: number;
  heading: string;
  statistics: ResponseStatistic[];
  cta: {
    id: number;
    buttonText: string;
    buttonLink: string;
    bannerText: string | null;
  };
}

export interface ResponseStatistic {
  id: number;
  label: string;
  value: number;
  unit: string | null;
  category: "currency" | "items" | "shipments" | "time";
}
