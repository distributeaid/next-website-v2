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
  type: string;
}
