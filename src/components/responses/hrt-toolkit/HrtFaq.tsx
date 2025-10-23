import { FC } from "react";
import Image from "next/image";
import { Box, Container, Heading, Section, Text } from "@radix-ui/themes";
import { FaArrowDown } from "react-icons/fa";

const faqs = [
  [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?",
    "Here is where we'd put an answer.",
  ],
  [
    "Here is where we'd put a question?",
    "Here is where we'd put an answer - lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ],
  ["Here is where we'd put a question?", "Here is where we'd put an answer."],
];

export const HrtFaq: FC = () => (
  <>
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
              <Text as="div" size="3" className="pl-8">
                A: {item[1]}
              </Text>
            </details>
          </Box>
        ))}
      </Container>
    </Section>
  </>
);
