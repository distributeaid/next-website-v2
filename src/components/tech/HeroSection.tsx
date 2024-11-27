import { Flex, Heading, Text, Button } from "@radix-ui/themes";

const HeroSection = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      className="w-full items-center p-10"
    >
      <Heading className="text-center text-white uppercase font-bold md:text-5xl md:py-6 py-2 z-20 sm:text-3xl text-xl">
        TECH AT DISTRIBUTE AID
      </Heading>

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
          <Heading className="text-lg lg:text-5xl md:text-4xl sm:text-3xl md:mt-10 mt-4 font-bold drop-shadow-[0px_4px_6px_rgba(5,30,93,0.7)]">
            Open-Source Solutions For Global Aid Delivery
          </Heading>
          <Text className="text-sm md:text-lg sm:text-md font-roboto font-bold md:mx-32 md:mt-6 p-4 text-center drop-shadow-[0px_4px_6px_rgba(5,30,93,0.6)]">
            Our diverse tech team of volunteers works hard to create technical
            solutions that make Distribute Aid’s work more efficient and easier
            to scale even with the limited resources NGOs have. We provide
            solutions that can be replicated across the sector by our partners
            and other NGOs in the field which is one of the reasons why our work
            is open-sourced.{" "}
          </Text>

          <Text className="text-sm md:text-lg sm:text-md font-roboto font-bold md:mx-32 p-4 text-center drop-shadow-[0px_4px_6px_rgba(5,30,93,0.6)]">
            Read on to learn more about our tech team and our Open Source
            Explorers program.
          </Text>

          <Flex
            direction={{ initial: "column", md: "row" }}
            justify={{ initial: "start", md: "center" }}
            align="center"
            gap={{ initial: "1", md: "5" }}
            className="w-full "
          >
            <Button className="w-[160px] h-[60px] px-4 py-2 text-sm font-normal">
              Join Our Team
            </Button>
            <Button className="w-[160px] h-[60px] text-sm  bg-white text-blue-950 font-normal">
              Become a Sponsor
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
