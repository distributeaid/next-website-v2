import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Strong,
  Grid,
  Button,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
const SponsorSection = () => {
  return (
    <Container size={{ xs: "1", sm: "2", md: "3", lg: "4" }} align="center">
      <Flex width="100%" direction="column" align="center" justify="center">
        {/* color defined in /src/stylesheets/ */}
        <Heading align={"center"} size={"8"} style={{ color: "var(--blue-9)" }}>
          Sponsor Distribute Aid's Tech Team
        </Heading>
        <Grid
          columns={{ initial: "1", sm: "2" }}
          py={"6"}
          gap={"4"}
          width={"auto"}
        >
          {/* images */}
          <Flex position={"relative"} align={"center"}>
            <Box
              display={{ initial: "none", sm: "block" }}
              ml={"-100%"}
              width={"150%"}
              height={"100%"}
              className="bg-[#1D2F73] rounded-r-[32px]"
            ></Box>
            <Box position={{ sm: "absolute" }} z-index={"1"}>
              <Image
                className="rounded-l-[32px]"
                width={"540"}
                height={"340"}
                src={"/images/tech/Sponsor-DA-Tech.jpg"}
                alt="img of hands coming together"
              ></Image>
            </Box>
          </Flex>
          {/* text + button */}
          <Flex
            direction={"column"}
            align={{ initial: "center", sm: "start" }}
            px={"2"}
            gap={"6"}
          >
            <Text size={"4"}>
              <Strong>
                Our tech team, including Open Source Explorers, runs entirely on
                volunteer work.
              </Strong>{" "}
              Funding allows us to create a stable base for our team, cover the
              cost of the tools we use to do our work and make faster progress
              on the issues we work on. This allows us to better support
              Distribute Aid’s primary efforts.
            </Text>

            <Text size={"4"}>
              Ultimately, our tech-based solutions allow workers from the entire
              global aid community to act faster and more efficiently. Funding
              also allows us to run more Open Source Explorers cohorts, which
              benefits the OSS ecosystem at large.
            </Text>

            <Text size={"4"}>
              <Strong>
                If you’re interested in becoming a sponsor, please get in touch
                with us.
              </Strong>{" "}
            </Text>

            <Link href="mailto:tech@distributeaid.org">
              <Button size="4">Become A Sponsor</Button>
            </Link>
          </Flex>
        </Grid>
      </Flex>
    </Container>
  );
};

export default SponsorSection;
