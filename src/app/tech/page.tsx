import HeroSection from "@/components/tech/HeroSection";
import { Box, Flex } from "@radix-ui/themes";

const page = () => {
  return (
    <Flex
      direction="column"
      justify="start"
      align="center"
      className="relative w-full"
      gap={{ initial: "4", lg: "6", xl: "9" }}
    >
      <Box
        width="full"
        position="absolute"
        inset="0"
        height="450px"
        className="bg-navy-900 z-0"
      />

      <HeroSection />
    </Flex>
  );
};

export default page;
