import { Flex, Heading, Button, Box, Container, Text } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import { FundProps } from "@/types/fund";
import FundProgress from "@/components/donate/FundProgress";
import BreadCrumbs from "@/components/ui/BreadCrumbs";

const FundHero = ({ fund }: FundProps) => {
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
    <Box position={"relative"} className="bg-red-50">
      <Container
        pb={{ initial: "6", sm: "36px", md: "40px" }}
        px="4"
        size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
        align="center"
      >
        <BreadCrumbs links={links} />
        <Flex
          pt={{ initial: "6", sm: "36px", md: "40px" }}
          pb="7"
          gap={"40px"}
          align={{ lg: "center" }}
          direction={{ initial: "column", sm: "row" }}
        >
          <Box flexBasis={{ initial: "100%", sm: "75%" }} width="100%">
            <Image
              src={img || "/images/donate/european-refugee-relief-hero.webp"}
              alt={""}
              height={0}
              width={0}
              sizes={"100vw"}
              className="w-full"
            />
          </Box>
          <Box width={{ initial: "100%", sm: "auto" }}>
            <Text size="3">Goal: €{goal_price}</Text>
            <Box mt="3" mb="28px" asChild>
              <Heading
                as="h1"
                size={{ initial: "7", sm: "8", md: "9" }}
                weight="regular"
                color="blue"
                highContrast
              >
                {title}
              </Heading>
            </Box>
            <FundProgress raised={percentage} />
            <Box mt="20px" width="100%" py="10px" height="auto" asChild>
              <Button
                size="2"
                className="bg-navy-600 hover:bg-navy-500"
                asChild
              >
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
          </Box>
        </Flex>
        {description && (
          <Text as="p" size="5" align="center" weight="medium">
            {description}
          </Text>
        )}
      </Container>
    </Box>
  );
};

export default FundHero;
