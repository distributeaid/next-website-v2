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

export interface Fundraiser {
  id: number;
  documentId: string;
  title: string;
  featuredImageURL: string | null;
  amountRaised: string;
  goalTotal: string;
  isFeatured: boolean;
  donateURL: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
