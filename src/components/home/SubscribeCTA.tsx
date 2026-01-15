"use client";
import { Flex, Text } from "@radix-ui/themes";

const SubscribeCTA = () => {
  return (
    <Flex
      direction="column"
      align="center"
      gap="5"
      mx={{
        initial: "6",
        md: "9",
      }}
      my="5"
    >
      <Text size="6" align="center" className="max-w-[1000px]">
        Distribute Aid connects donors with frontline aid organizations serving
        communities in need. Our logistics experts help deliver more aid more
        quickly—at lower costs.
      </Text>
    </Flex>
  );
};

export default SubscribeCTA;
