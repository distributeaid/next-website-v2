import { Box, Container, Heading, Flex, Button, Link, Grid } from "@radix-ui/themes";
import Image from "next/image";
import siteSettings from "../../../data/site-settings.json";

const DonationCTA = () => {
  const { donate } = siteSettings;
  return (
    <Box style={{ background: "#DFCDE8" }}>
      <Container
        pb={{ initial: "6", sm: "36px", md: "40px" }}
        px="4"
        size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
        align="center"
      >
        <Heading
          as="h2"
          className="text-[#051E5E]"
          size={{ initial: "6", sm: "8" }}
        >
          Ship aid to people in need.
        </Heading>
        <Grid
            columns={{ initial: "1", sm: "3"}}
            align="baseline"
          gap={{ initial: "3", sm: "5" }}
        >
            <Flex
                direction="column"
                gap="3"
                align="center">
                <Image
                    src="/images/donate/paypal.svg"
                    alt={""}
                    height={0}
                    width={0}
                    sizes={"100vw"}
                    className="mx-auto max-w-[122px] md:max-w-[150px] w-full"
                />
                <Button
                    className="bg-white text-black group hover:bg-[#4362A6] hover:text-white transition-200 cursor-pointer"
                    size={{ initial: "2", sm: "3" }}
                    asChild
                >
                    <Link
                    href={siteSettings.donate.byPaypal}
                    target="_blank"
                    underline="none"
                    >
                    Donate with Paypal
                    </Link>
                </Button>
            </Flex>
            <Flex
                direction="column"
                gap="3"
                align="center">
                <Image
                    src="/images/donate/omprakash.png"
                    alt={""}
                    height={0}
                    width={96}
                    sizes={"100vw"}
                    className="mx-auto"
                />
                <Button
                    className="cursor-pointer"
                    size={{ initial: "2", sm: "3" }}
                    asChild
                >
                    <Link
                    href={siteSettings.donate.byOmprakash}
                    target="_blank"
                    underline="none"
                    >
                    Use a Debit/Credit card
                    </Link>
                </Button>
            </Flex>
            <Flex
                direction="column"
                gap="3"
                align="center">
                <Image
                    src="/images/donate/dollar.svg"
                    alt={""}
                    height={0}
                    width={52}
                    sizes={"100vw"}
                    className="mx-auto"
                />
                <Button className="cursor-pointer" size={{ initial: "2", sm: "3" }}>
                    Make a Bank Transfer
                </Button>
            </Flex>
        </Grid>
      </Container>
    </Box>
  );
};

export default DonationCTA;
