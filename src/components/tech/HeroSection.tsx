import { Container, Flex, Box, Heading, Text, Link, Button } from "@radix-ui/themes";

const HeroSection = () => {
  return (
    <Container size={{xs: "1", sm: "2", md: "3", lg: "4"}} align="center">
      <Flex
        width="100%"
        direction="column"
        align="center"
        justify="center"
      >
        <Box
          pt={{initial: "1", md: "4"}}
          pb={{initial: "2", md: "6"}}
          asChild={true}
        >
          <Heading
            as="h1"
            size={{ initial: "7", sm: "8", md: "9" }}
            weight="bold"
            align="center"
            className="uppercase text-white"
          >
            TECH AT DISTRIBUTE AID
          </Heading>
        </Box>
        <Flex
          position="relative"
          width="100%"
          direction="column"
          align="center"
          justify="center"
          className="rounded-bl-[32px] rounded-br-[32px] bg-cover bg-center bg-[url('/images/tech/tech-hero-background-img.jpg')]"
        >
          <Flex
            direction="column"
            gap="4"
            justify="center"
            align="center"
            px={{initial:"4", sm: "6"}}
            py={{initial:"6", sm: "8"}}
            className="text-white bg-[#252525B2]/60 rounded-bl-[32px] rounded-br-[32px] inset-0 text-center "
          >
            <Heading
              as="h2"
              size={{ initial: "6", sm: "7", md: "8" }}
              weight="bold"
              align="center"
              mb={{ initial: "2", sm: "4" }}
              className="drop-shadow-[0px_4px_6px_rgba(5,30,93,0.7)]"
            >
              Open-Source Solutions For Global Aid Delivery
            </Heading>
            <Text
              size={{ initial: "3", sm:"4" }}
              weight="bold"
              align="center"
              className="font-roboto drop-shadow-[0px_4px_6px_rgba(5,30,93,0.6)]"
            >
              Our diverse tech team of volunteers works hard to create technical
              solutions that make Distribute Aid’s work more efficient and easier
              to scale even with the limited resources NGOs have. We provide
              solutions that can be replicated across the sector by our partners
              and other NGOs in the field which is one of the reasons why our work
              is open-sourced.
            </Text>

            <Text
              size={{ initial: "3", sm:"4" }}
              weight="bold"
              align="center"
              className="font-roboto drop-shadow-[0px_4px_6px_rgba(5,30,93,0.6)]"
            >
              Read on to learn more about our tech team and our Open Source
              Explorers program.
            </Text>

            <Flex
              width="100%"
              direction={{ initial: "column", sm: "row" }}
              justify={{ initial: "start", sm: "center" }}
              align="center"
              gap={{ initial: "3", sm: "5" }}
              mt={{ initial: "2", sm: "4" }}
            >
              <Link href="mailto:tech@distributeaid.org">
                <Button size="4">Join Our Team</Button>
              </Link>
              <Link href="mailto:tech@distributeaid.org">
                <Button size="4" className="bg-white text-blue-950 font-normal">
                  Become A Sponsor
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default HeroSection;
