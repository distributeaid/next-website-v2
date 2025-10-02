"use client";
import { Box, Flex, Text, Button } from "@radix-ui/themes";

const SubscribeCTA = () => {
  const handleClick = () => {
    // TODO: Add subscribe logic
  };

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
      <Text size="7" align="center" className="max-w-[1000px]">
        Distribute Aid connects donors with frontline aid organizations serving
        communities in need. Our logistics experts help deliver more aid more
        quickly—at lower costs.
      </Text>
      <Box>
        <Button
          onClick={handleClick}
          className="py-7 px-9 flex-grow-0 text-[16px]"
          style={{ borderRadius: "0.5rem", fontWeight: "500" }}
        >
          Subscribe
        </Button>
      </Box>
    </Flex>
  );
};

export default SubscribeCTA;
