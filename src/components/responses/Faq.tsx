import { FC } from "react";
import { Box, Container, Heading, Section, Text } from "@radix-ui/themes";
import { FaArrowDown } from "react-icons/fa";

import type FaqItem from "@/data/types/FaqItem";

interface FaqProps {
  faqs: FaqItem[];
}

export const Faq: FC<FaqProps> = ({ faqs }) => (
  <Section p="0">
    <Heading as="h2" align="center" size="8">
      FAQ <FaArrowDown className="inline" />
    </Heading>
    <Container px="8" py="4" className="bg-navy-300">
      {faqs?.map((item, index) => (
        <Box key={`faq-${index}`} my="1">
          <details>
            <summary>
              <Text weight="bold" size="4">
                Q: "{item.q}"
              </Text>
            </summary>
            <Box as="div" className="pl-8 faq-answer">
              {item.a}
            </Box>
          </details>
        </Box>
      ))}
    </Container>
  </Section>
);
