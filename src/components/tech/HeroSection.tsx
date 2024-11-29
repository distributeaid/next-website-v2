import { Flex, Heading, Text, Button, Box } from "@radix-ui/themes";

const HeroSection = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      className="w-full items-center px-20"
    >
      <Box
        width="full"
        py="2"
        className="text-center text-white uppercase font-bold md:py-8 z-20"
      >
        <Heading as="h1" size={{ initial: "5", sm: "7", md: "9" }}>
          TECH AT DISTRIBUTE AID
        </Heading>
      </Box>
      <Flex
        direction="column"
        align="center"
        justify="center"
        className="w-full h-[520px] relative rounded-bl-[32px] rounded-br-[32px] bg-cover bg-center bg-[url('/images/tech/tech-hero-background-img.jpg')]"
      >
        <Flex
          direction="column"
          gap="3"
          justify="center"
          align="center"
          className="h-full bg-[#252525B2]/60 text-white rounded-bl-[32px] rounded-br-[32px] inset-0 text-center "
        >
          <Heading
            as="h4"
            size="5"
            className="text-center md:text-5xl md:mt-10 mt-4 font-bold drop-shadow-[0px_4px_6px_rgba(5,30,93,0.7)]"
          >
            Open-Source Solutions For Global Aid Delivery
          </Heading>
          <Text
            size={{ initial: "2", md: "6" }}
            weight="bold"
            align="center"
            className="font-roboto md:mx-32 md:mt-8 p-2 drop-shadow-[0px_4px_6px_rgba(5,30,93,0.6)]"
          >
            Our diverse tech team of volunteers works hard to create technical
            solutions that make Distribute Aid’s work more efficient and easier
            to scale even with the limited resources NGOs have. We provide
            solutions that can be replicated across the sector by our partners
            and other NGOs in the field which is one of the reasons why our work
            is open-sourced.{" "}
          </Text>

          <Text
            size={{ initial: "2", md: "6" }}
            weight="bold"
            align="center"
            className="font-roboto md:mx-32 p-4 drop-shadow-[0px_4px_6px_rgba(5,30,93,0.6)]"
          >
            Read on to learn more about our tech team and our Open Source
            Explorers program.
          </Text>

          <Flex
            direction={{ initial: "column", md: "row" }}
            justify={{ initial: "start", md: "center" }}
            align="center"
            gap={{ initial: "1", md: "5" }}
            className="w-full py-4"
          >
            <Button size="4">Join Our Team</Button>
            <Button size="4" className="bg-white text-blue-950 font-normal">
              Become a Sponsor
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
