import { FC } from "react";
import { Box, Button, Em, Flex, Heading, Section, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { HRTNumbersCard, HrtNumbersCardProps } from "./HrtNumbersCard";

export const HrtKitsInNumbers: FC = () => {
  return (
    <>
      <Section>
        <Flex
          gap="2"
          height="360px"
          className="flex-wrap"
          align="center"
          justify="center"
        >
          <HRTNumbersCard
            amount={1000}
            background="circle-green"
            color="white"
            direction="column"
            icon="/images/responses/hrt-toolkit/medical-kit.svg"
          >
            <Text as="p" size="7" weight="light">PARTIAL KITS</Text>
            <Text as="p" size="5" weight="bold" align="center"><Em>donate to get remaining supplies!</Em></Text>
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
          <Flex height="100%" justify="between" align="between" direction="column">
            <HRTNumbersCard
              amount={1000}
              background="navy-300"
              color="navy-800"
              direction="row"
              icon="/images/responses/hrt-toolkit/medical-kit-blue.svg"
            >
              <Text size="6" weight="light">KITS PRODUCED SO FAR</Text>
            </HRTNumbersCard>
            <HRTNumbersCard
              amount={1000}
              background="navy-800"
              color="white"
              direction="row"
              icon="/images/responses/hrt-toolkit/money-dollar.svg"
              amountPrefix="$"
            >
              <Text size="4" weight="light">SAVED FOR THE TRANS COMMUNITY</Text>
            </HRTNumbersCard>
          </Flex>
        </Flex>
      </Section>
    </>
  );
};
