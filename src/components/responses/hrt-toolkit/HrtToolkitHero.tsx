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
          HRT - Harm Reduction Toolkit
        </Heading>
      </Container>
    </Section>

    <Section>
      <Container size="3">
        <Text as="p" size="5" align="center" className="text-navy-800">
          We source harm reduction kits with medical equipment that our partners
          then distribute to trans people who take injection-based gender
          affirming hormone therapy.
        </Text>
      </Container>
    </Section>
  </>
);
