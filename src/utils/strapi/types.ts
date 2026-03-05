export interface TeamMember {
  id: string;
  Name: string;
  Bio: string;
  Pronouns: string;
  Profile: StrapiMedia;
  Roles: TeamMemberRole[];
}

export interface StrapiMedia {
  url: string;
}

export interface TeamMemberRole {
  Title: string;
  Type: string;
}
