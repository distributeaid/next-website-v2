import { FC } from "react";
import { Box, Heading, Section } from "@radix-ui/themes";
import { TeamCard } from "./TeamCard";
import { getTeam } from "@/utils/strapi/api";
import type { TeamMemberRoleType } from "@/utils/strapi/types";

export type TeamMembersProps = {
  roleType: TeamMemberRoleType;
  bannerImage: string;
  header: string;
};

export const TeamMembers: FC<TeamMembersProps> = async ({
  roleType,
  header,
  bannerImage,
}) => {
  const people = await getTeam(roleType);

  if (people.length === 0) return;

  return (
    <Section>
      <Box
        p="8"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${bannerImage})`,
          backgroundSize: "100% auto",
          backgroundPositionY: "25%",
        }}
      >
        <Heading
          as="h1"
          size={{ initial: "8", md: "9" }}
          align="center"
          className="uppercase"
        >
          {header}
        </Heading>
      </Box>
      <ul className="text-center grid grid-cols-2">
        {people.map((item, index) => (
          <li key={`exec-${index}`} className="inline-block">
            <TeamCard
              name={`${item.name} ${item.pronouns}`}
              title={item.roles[0].title}
              photo={`${item.profile.url}`}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};
