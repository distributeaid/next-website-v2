import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { MarkdownContent } from "../markdown/MarkdownContent";
import { TeamMember } from "@/utils/strapi/types";

export interface CardProps {
  teamMember: TeamMember;
  bgColor: string;
}

export const BoardCard = ({ bgColor, teamMember }: CardProps) => {
  return (
    <>
      <Box className={`flex justify-center h-auto rounded-md ${bgColor}`}>
        <Flex direction="column" align="center">
          <div className="pt-7 px-7 w-full">
            <Box className="rounded-md overflow-hidden aspect-[4/3] w-full">
              <Image
                src={teamMember.Profile.url}
                alt={`Photo of ${teamMember.Name}`}
                width={400}
                height={400}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  transform: "translateY(-15%)",
                }}
              />
            </Box>
            <Heading
              as="h6"
              color="gray"
              weight="bold"
              className="pt-3 flex justify-center"
            >
              {teamMember.Name.toUpperCase()}
            </Heading>
          </div>
          <Text
            as="div"
            color="gray"
            align="center"
            wrap="pretty"
            weight="medium"
            className="text-center h-full pt-10 px-4 pb-8 flex flex-col justify-center"
          >
            <MarkdownContent content={teamMember.Bio} />
          </Text>
        </Flex>
      </Box>
    </>
  );
};
