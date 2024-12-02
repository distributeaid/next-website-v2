import { Flex, Heading, Text } from "@radix-ui/themes";

const heading = "About ASSORT";

const description =
  "The Aid Standards for Sorting (ASSORT) are a set of interoperability standards for humanitarian aid that are designed to save grassroots organisations time, effort, and money.";

export const AboutAssort = ({ color }: { color: string }) => {
  return (
    <Flex
      justify="center"
      align="center"
      className={`text-${color}`}
      direction="column"
      gap="5"
      my="5"
      mx={{ md: "9", initial: "2" }}
    >
      <Heading size="8" align="center">
        {heading}
      </Heading>
      <Text align="center" size="5">
        {description}
      </Text>
    </Flex>
  );
};
