import { FC } from "react";
import { Box, Container, Heading, Section, Text } from "@radix-ui/themes";
import { FaArrowDown } from "react-icons/fa";
import { faqs } from "../../../data/hrtToolkitData";

export const HrtFaq: FC = () => (
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
                Q: "{item[0]}"
              </Text>
            </summary>
            <Box as="div" className="pl-8 faq-answer">
              {item[1]}
            </Box>
          </details>
        </Box>
      ))}
    </Container>
  </Section>
);
