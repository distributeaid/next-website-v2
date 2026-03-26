import { FC } from "react";
import { Button, Em, Flex, Heading, Section, Text, Box } from "@radix-ui/themes";
import Link from "next/link";
import { HRTNumbersCard } from "./HrtNumbersCard";
import { kitsInNumbersValues as values } from "../../../data/hrtToolkitData";

export const HrtKitsInNumbers: FC = () => {
  return (
    <Section p="0" my="4">
      <Heading
        as="h2"
        size="7"
        weight="bold"
        align="center"
        className="text-navy-800"
        mb="5"
      >
        HRT Kits In Numbers
      </Heading>
      <Flex gap="2" className="flex-wrap" align="center" justify="center">
        <HRTNumbersCard
          amount={values.yearsSupported}
          background="circle-green"
          color="white"
          direction="column"
          icon="/images/icons/icon-medical-kit.svg"
          iconAlt="medical kit"
          maxWidth="350px"
        >
          <Text as="p" size="8" weight="light" align="center">
            YEARS OF HRT SUPPORTED
          </Text>
        </HRTNumbersCard>
        <Flex height="360px" justify="between" direction="column">
          <HRTNumbersCard
            amount={values.producedKits}
            background="navy-300"
            color="navy-800"
            direction="row"
            icon="/images/icons/icon-medical-kit-blue.svg"
            iconAlt="medical kit"
            maxWidth="350px"
          >
            <Text size="6" weight="light">
              KITS PRODUCED SO FAR
            </Text>
          </HRTNumbersCard>
          <HRTNumbersCard
            amount={values.saved}
            background="navy-800"
            color="white"
            direction="row"
            icon="/images/icons/icon-currency-dollar.svg"
            iconAlt="money"
            amountPrefix="$"
            maxWidth="350px"
          >
            <Text size="4" weight="light">
              SAVED FOR THE TRANS COMMUNITY
            </Text>
          </HRTNumbersCard>
        </Flex>
      </Flex>
      <Flex align="center" justify="center" mt="4">
        <HRTNumbersCard
            amount={values.partialKits}
            background="navy-800"
            color="white"
            direction="row"
            icon="/images/icons/icon-currency-dollar.svg"
            iconAlt="money"
            maxWidth="740px"
          >
            <Text size="6" weight="light">
                Partial Kits - Donate to complete kits!
            </Text>
            <Box>
              <Button className="bg-white text-navy-800" size="4" asChild mb="2" ml="5">
                <Link
                  href="https://www.omprakash.org/global/distribute-aid/crowdfund/hrt---harm-reduction-toolkit"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Donate
                </Link>
              </Button>
            </Box>
          </HRTNumbersCard>
        </Flex>
    </Section>
  );
};
