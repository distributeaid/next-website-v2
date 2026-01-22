export interface TeamMember {
  Id: string;
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
