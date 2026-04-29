import { FC, ReactNode } from "react";
import { Container, Heading, Section, Text } from "@radix-ui/themes";

interface ResponseHeroProps {
  title: string;
  children: ReactNode;
}

export const ResponseHero: FC<ResponseHeroProps> = ({ title, children }) => (
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
          {title}
        </Heading>
      </Container>
    </Section>

    <Section>
      <Container size="3">
        <Text as="p" size="5" align="center" className="text-navy-800">
          {children}
        </Text>
      </Container>
    </Section>
  </>
);
