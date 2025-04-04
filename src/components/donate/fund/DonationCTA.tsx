import { Box, Container, Heading, Flex, Button, Grid } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import siteSettings from "../../../data/site-settings.json";
import BankInfoDialog from "../BankInfoDialog";

const DonationCTA = () => {
  const { donate } = siteSettings;
  return (
    <Box style={{ background: "#DFCDE8" }}>
      <Container
        pb={{ initial: "6", sm: "36px", md: "40px" }}
        px="4"
        size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
        align="center"
        pt={{ initial: "28px", sm: "38px", md: "28px" }}
      >
        <Heading
          as="h2"
          className="text-[#051E5E]"
          size={{ initial: "6", sm: "8" }}
          mb={{ initial: "7", sm: "5" }}
          weight="regular"
        >
          Ship aid to people in need.
        </Heading>
        <Grid
          columns={{ initial: "1", sm: "3" }}
          align="baseline"
          gap={{ initial: "52px", md: "88px" }}
        >
          <Flex direction="column" gap="3" align="center">
            <Image
              src="/images/donate/paypal.svg"
              alt={""}
              height={0}
              width={0}
              sizes={"100vw"}
              className="mx-auto max-w-[122px] md:max-w-[150px] w-full"
            />
            <Button
              className="bg-white text-black group hover:bg-[#4362A6] hover:text-white transition-200 cursor-pointer w-full px-3"
              size={{ initial: "2", sm: "3" }}
              asChild
            >
              <Link
                href={donate.byPaypal}
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate with Paypal
              </Link>
            </Button>
          </Flex>
          <Flex direction="column" gap="3" align="center">
            <Image
              src="/images/donate/omprakash.png"
              alt={""}
              height={0}
              width={96}
              sizes={"100vw"}
              className="mx-auto"
            />
            <Button
              className="cursor-pointer w-full px-3"
              size={{ initial: "2", sm: "3" }}
              asChild
            >
              <Link
                href={donate.byOmprakash}
                target="_blank"
                rel="noopener noreferrer"
              >
                Use a Debit/Credit card
              </Link>
            </Button>
          </Flex>
          <Flex direction="column" gap="3" align="center">
            <Image
              src="/images/donate/dollar.svg"
              alt={""}
              height={0}
              width={52}
              sizes={"100vw"}
              className="mx-auto"
            />
            <BankInfoDialog />
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};

export default DonationCTA;
