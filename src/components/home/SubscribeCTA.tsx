"use client";
import { Box, Flex, Text, Button, Link } from "@radix-ui/themes";

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
      <Box>
        <Button
          className="py-7 px-11 flex-grow-0 text-[16px] cursor-pointer"
          style={{ borderRadius: "0.5rem", fontWeight: "500" }}
        >
          <Link className="text-white" href="#newsletter-signup">
            Subscribe
          </Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default SubscribeCTA;
