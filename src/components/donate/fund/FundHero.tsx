import { Flex, Heading, Button, Box, Container, Text } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import { Fund } from "@/types/fund";
import FundProgress from "@/components/donate/FundProgress";
import BreadCrumbs from "@/components/ui/BreadCrumbs";

interface HeroSectionProps {
  fund: Fund;
}

const FundHero = ({ fund }: HeroSectionProps) => {
  const { title, goal_price, percentage, img, donate_link, slug, description } =
    fund;
  const links = [
    {
      url: "/donate",
      title: "Donate",
      currentLink: false,
    },
    {
      url: `/${slug}`,
      title: "More Info",
      currentLink: true,
    },
  ];
  return (
    <>
      <Box position={"relative"} style={{ background: "#DFCDE8" }}>
        <Container
          pb={{ initial: "6", sm: "36px", md: "40px" }}
          size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
          align="center"
        >
          <BreadCrumbs links={links} />
          <Flex
            pt={{ initial: "6", sm: "36px", md: "40px" }}
            pb="7"
            gap={"40px"}
            align="center"
            direction={{ initial: "column", sm: "row" }}
          >
            <Box flexBasis={{ initial: "100%", sm: "75%" }}>
              <Image
                src={img || "/images/donate/european-refugee-relief-hero.webp"}
                alt={""}
                height={0}
                width={0}
                sizes={"100vw"}
                style={{
                  width: "100%",
                  // flexBasis: "75%",
                  // display: "block",
                  // objectFit: "cover",
                  // width: "100%",
                  // height: 150,
                  // backgroundColor: "var(--blue-9)",
                }}
              />
            </Box>
            <Box>
              <Text size="3">Goal: €{goal_price}</Text>
              <Heading
                mt="3"
                mb="28px"
                as="h1"
                size={{ initial: "7", sm: "8", md: "9" }}
                weight="regular"
                color="blue"
                highContrast
              >
                {title}
              </Heading>
              <FundProgress raised={percentage} />
              <Button mt="20px" className="bg-[#224BA4] w-full">
                <Link
                  className="no-underline"
                  href={donate_link || ""}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Donate now
                </Link>
              </Button>
            </Box>
          </Flex>
          {description && (
            <Text as="p" size="5" align="center" weight="medium">
              {description}
            </Text>
          )}
        </Container>
      </Box>
      {/* blue bg */}
    </>
  );
};

export default FundHero;
