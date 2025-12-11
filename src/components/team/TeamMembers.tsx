import { FC } from "react";
import { Box, Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import { TeamCard, TeamCardProps } from "./TeamCard";
import { TeamMember } from "@/data/team";

export type TeamMembersProps = {
  people: TeamMember[];
  bannerImage: string;
  header: string;
};

export const TeamMembers: FC<TeamMembersProps> = ({
  people,
  header,
  bannerImage,
}) => (
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
          <TeamCard name={item.name} title={item.title} photo={item.photo} />
        </li>
      ))}
    </ul>
  </Section>
);
