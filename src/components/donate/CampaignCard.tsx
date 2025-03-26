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
  Badge,
} from "@radix-ui/themes";
import { FC, forwardRef } from "react";
import Image from "next/image";

type Props = {
  imgSrc: string | undefined;
  imgAlt: string | undefined;
  title: string | undefined;
  raised: number | undefined;
  goal: number | undefined;
  donateLink: string | undefined;
  moreLink: string | undefined;
  [key: string]: any;
};

// enable RadixUI's asChild functionality for callig code
// https://www.radix-ui.com/primitives/docs/guides/composition#composing-with-your-own-react-components
const CampaignCard: FC<Props> = forwardRef<HTMLDivElement, Props>(
  (
    {
      imgSrc = "/images/donate/european-refugee-relief-hero.webp",
      imgAlt = "",
      title = "Untitled Campaign",
      raised = 0,
      goal = 0,
      donateLink = "#",
      moreLink = "#",
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <Box asChild maxWidth="373px" ref={forwardedRef} {...props}>
        <Card>
          <Flex direction="column" justify={"between"} height={"100%"}>
            <Inset clip="padding-box" pb="current">
              {/* if rasied >= 75% of goal show "close" pill */}
              {raised >= 75 && (
                <Box top={"3"} left={"4"} position={"absolute"}>
                  <Badge style={{ background: "white", color: "black" }}>
                    Close!!
                  </Badge>
                </Box>
              )}
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
                {/* Note: the percentage should be raised/goal where goal != 0 */}
                <Text size="2" color="blue" highContrast>
                  {raised}%
                </Text>
              </Flex>
            </Inset>
            <Box mx="1" mt="3">
              <Heading
                as="h3"
                size="8"
                weight="regular"
                color="blue"
                highContrast
              >
                {title}
              </Heading>
              <Box asChild mb="4">
                <Text size="3">Goal: €{goal}</Text>
              </Box>
            </Box>
            <Flex gap="2" wrap={"wrap"} mx="1" mb="3" mt="auto">
              <Box px="4" py="2" asChild>
                <Button className="bg-[#224BA4] hover:bg-[#4362A6]" asChild>
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
          </Flex>
        </Card>
      </Box>
    );
  },
);

CampaignCard.displayName = "CampaignCard";

export default CampaignCard;
