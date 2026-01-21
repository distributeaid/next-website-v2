export interface TeamMember {
	Name: string;
	Pronouns: string;
	Profile: StrapiMedia;
	Bio: string;
	Roles: TeamMemberRole[];
}

export interface StrapiMedia {
	url: string;
}

export interface TeamMemberRole{
	Title: string;
	Type: string;
}