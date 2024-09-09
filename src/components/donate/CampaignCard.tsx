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

const CampaignCard: FC<{
  imgSrc: string;
  imgAlt: string;
  title: string;
  raised: number;
  goal: number;
  donateLink: string;
}> = ({ imgSrc, imgAlt, title, raised, goal, donateLink }) => {
  return (
    <Box asChild width="373px">
      <Card>
        <Inset clip="padding-box" pb="current">
          <img
            src={imgSrc}
            alt={imgAlt}
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 150,
              backgroundColor: "var(--blue-9)",
            }}
          ></img>
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
              value={(raised / goal) * 100.0}
              variant="surface"
              style={{
                backgroundColor: "var(--green-4)",
              }}
            />
            <Text
              size="2"
              color="blue"
              highContrast
              style={{
                fontFamily: "var(--font-permanent-marker)",
              }}
            >
              {(raised / goal) * 100}%
            </Text>
          </Flex>
        </Inset>
        <Box mx="1" my="3">
          <Heading as="h3" size="8" weight="regular" color="blue" highContrast>
            {title}
          </Heading>
          <Box asChild mb="4">
            <Text size="3">Goal: €{goal}</Text>
          </Box>
          <Flex gapX="2">
            <Box px="4" py="2" asChild>
              <Button asChild>
                <Link href={donateLink} size="3">
                  Donate now
                </Link>
              </Button>
            </Box>
            <Box px="4" py="2" asChild>
              <Button variant="soft" size="3">
                More info
              </Button>
            </Box>
          </Flex>
        </Box>
      </Card>
    </Box>
  );
};

export default CampaignCard;
