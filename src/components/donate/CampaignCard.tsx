import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Inset,
  Link,
  Progress,
  Text,
} from "@radix-ui/themes";
import { FC } from "react";
import Image from "next/image";

const CampaignCard: FC<{
  imgSrc: string | undefined;
  imgAlt: string | undefined;
  title: string | undefined;
  raised: number | undefined;
  goal: number | undefined;
  donateLink: string | undefined;
  moreLink: string | undefined;
}> = ({
  imgSrc = "/images/donate/european-refugee-relief-hero.webp",
  imgAlt = "",
  title = "Untitled Campaign",
  raised = 0,
  goal = 0,
  donateLink = "#",
  moreLink = "#",
}) => {
  return (
    <Box asChild maxWidth="373px">
      <Card>
        <Flex direction="column" justify={"between"} height={"100%"}>
          <Inset clip="padding-box" pb="current">
            <Image
              src={imgSrc}
              alt={imgAlt}
              height={0}
              width={0}
              sizes={"100vw"}
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 150,
                backgroundColor: "var(--blue-9)",
              }}
            />
            <Flex
              direction="row"
              align="center"
              gapX="3"
              px="4"
              py="3"
              style={{
                backgroundColor: "var(--green-9)",
              }}
            >
              <Progress
                value={raised}
                variant="surface"
                style={{
                  backgroundColor: "var(--green-4)",
                }}
              />
              <Text size="2" color="blue" highContrast>
                {raised}%
              </Text>
            </Flex>
          </Inset>
          <Box mx="1" mt="3">
            <Heading as="h3" size="8" weight="regular" color="blue" highContrast>
              {title}
            </Heading>
            <Box asChild mb="4">
              <Text size="3">Goal: €{goal}</Text>
            </Box>
          </Box>
          <Box mx="1" mb="3" mt="auto">
            <Flex gap="2" wrap={"wrap"}>
              <Box px="4" py="2" asChild>
                <Button asChild>
                  <Link href={donateLink} size="3">
                    Donate now
                  </Link>
                </Button>
              </Box>
              <Box px="4" py="2" asChild>
                <Button variant="soft" asChild>
                  <Link href={moreLink} size="3" className="no-underline">
                    More info
                  </Link>
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};

export default CampaignCard;