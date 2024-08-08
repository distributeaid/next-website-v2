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
    <Box maxWidth="400px">
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={imgSrc}
            alt={imgAlt}
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 200,
              backgroundColor: "var(--gray-5)",
            }}
          ></img>
          <Box
            p="3"
            style={{
              background: "var(--grass-7)",
            }}
          >
            <Progress value={(raised / goal) * 100.0} variant="surface" />
          </Box>
        </Inset>
        <Heading as="h3" size="8" weight="regular" color="indigo">
          {title}
        </Heading>
        <Text>Goal: €{goal}</Text>
        <Flex>
          <Button asChild>
            <Link href={donateLink}>Donate now</Link>
          </Button>
          <Button variant="soft">More info</Button>
        </Flex>
      </Card>
    </Box>
  );
};

export default CampaignCard;
