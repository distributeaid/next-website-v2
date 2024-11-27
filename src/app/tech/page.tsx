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
      <Box className="absolute inset-0 bg-navy-900 w-full h-[450px] z-0" />
      <HeroSection />
    </Flex>
  );
};

export default page;
