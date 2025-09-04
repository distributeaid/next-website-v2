import { FC } from "react";
import { Container, Flex, Heading, Section, Text } from "@radix-ui/themes";

export const HrtToolkitHero: FC = () => (
  <>
    <Section position="relative" width="100%" size="1" className="bg-navy-900">
      <Container>
        <Heading
          as="h1"
          size="9"
          weight="bold"
          align="center"
          className="text-white"
        >
          HRT KITS PROJECT
        </Heading>
      </Container>
    </Section>

    <Section>
      <Container size="3">
        <Text as="p" size="5" align="center" className="text-navy-800">
          The Aid Standards for Sorting (ASSORT) are a set of interoperability
          standards for humanitarian aid that are designed to save grassroots
          organisations time, effort, and money.
        </Text>
      </Container>
    </Section>
  </>
);