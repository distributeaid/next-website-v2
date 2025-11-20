import { FC } from "react";
import {
  Box,
  Button,
  Em,
  Flex,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { HRTNumbersCard, HrtNumbersCardProps } from "./HrtNumbersCard";
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
          amount={values.partialKits}
          background="circle-green"
          color="white"
          direction="column"
          icon="/images/responses/hrt-toolkit/medical-kit.svg"
          iconAlt="medical kit"
        >
          <Text as="p" size="8" weight="light">
            PARTIAL KITS
          </Text>
          <Text as="p" size="5" weight="bold" align="center">
            <Em>Donate to complete kits!</Em>
          </Text>
          <Button className="bg-white text-navy-800" size="4" asChild>
            <Link
              href="https://www.omprakash.org/global/distribute-aid/crowdfund/hrt---harm-reduction-toolkit"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              Donate
            </Link>
          </Button>
        </HRTNumbersCard>
        <Flex height="360px" justify="between" direction="column">
          <HRTNumbersCard
            amount={values.producedKits}
            background="navy-300"
            color="navy-800"
            direction="row"
            icon="/images/responses/hrt-toolkit/medical-kit-blue.svg"
            iconAlt="medical kit"
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
            icon="/images/responses/hrt-toolkit/money-dollar.svg"
            iconAlt="money"
            amountPrefix="$"
          >
            <Text size="4" weight="light">
              SAVED FOR THE TRANS COMMUNITY
            </Text>
          </HRTNumbersCard>
        </Flex>
      </Flex>
    </Section>
  );
};
