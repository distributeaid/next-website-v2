import { FC } from "react";
import { Button, Em, Flex, Heading, Section, Text } from "@radix-ui/themes";
import Link from "next/link";
import { NumbersCard } from "../NumbersCard";
import { USDisasterInNumbersValues as values } from "@/data/usDisasterPreparednessData";
export const USDisasterByTheNumbers: FC = () => {
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
        By The Numbers
      </Heading>
      <Flex gap="2" className="flex-wrap" align="center" justify="center">
        <NumbersCard
          amount={values.aidWorth}
          amountPrefix="$"
          background="circle-green"
          color="white"
          direction="column"
          icon="/images/icons/icon-currency-dollar.svg"
          iconAlt="money"
        >
          <Text as="p" size="8" weight="light">
            WORTH OF AID
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
        </NumbersCard>
        <Flex height="360px" justify="between" direction="column">
          <NumbersCard
            amount={values.diapers}
            background="navy-300"
            color="navy-800"
            direction="row"
            icon="/images/icons/icon-medical-kit-blue.svg"
            iconAlt="medical kit"
          >
            <Text size="6" weight="light">
              DIAPERS
            </Text>
          </NumbersCard>
          <NumbersCard
            amount={values.n95Masks}
            background="navy-800"
            color="white"
            direction="row"
            icon="/images/icons/icon-medical-kit.svg"
            iconAlt="medical kit"
          >
            <Text size="4" weight="light">
              N95 MASKS
            </Text>
          </NumbersCard>
        </Flex>
      </Flex>
    </Section>
  );
};
