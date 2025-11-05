import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import BorderedImage from "../ui/BorderedImage";
import SmartLink from "../link/SmartLink";

const technologies = [
  "TypeScript",
  "NextJS",
  "React",
  "RadixUI",
  "Tailwind",
  "Postgres",
  "NodeJS",
  "Strapi",
  "Jest",
  "Supertest",
  "Astro",
];

export const TechStackSection = () => {
  return (
    <Container
      px="4"
      size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
      align="center"
    >
      <Box width={"100%"} asChild>
        <Separator color="blue" orientation="horizontal" />
      </Box>
      <Grid gap="5" my="7" columns={{ initial: "1", md: "2" }}>
        <Flex gap="4" direction="column">
          <Heading
            size={{ initial: "7", sm: "8" }}
            align={{ initial: "center", md: "left" }}
            className="text-navy-900"
          >
            Our Tech Stack
          </Heading>
          <Text
            size={{ initial: "3", sm: "4", md: "5" }}
            color="blue"
            highContrast
          >
            We use the following technologies (and more). No need for deep
            familiarity with each — this just gives you an idea of what to
            expect.
          </Text>
          <Box>
            {technologies.map((item, index) => (
              <li
                key={index}
                className="text-navy-900 font-medium text-md sm:text-[18px] md:text-[22px] pl-3"
              >
                {item}
              </li>
            ))}
          </Box>
          <Text
            size={{ initial: "3", sm: "4", md: "5" }}
            color="blue"
            highContrast
          >
            Check out our{" "}
            <SmartLink
              href="https://github.com/distributeaid"
              className="underline"
            >
              Github
            </SmartLink>{" "}
            for more info!
          </Text>
        </Flex>
        <BorderedImage
          bgColor="var(--green-9)"
          image={{
            src: "/images/tech/tech-stack-image.png",
            alt: "Tech stack image",
          }}
        />
      </Grid>
      <Box width={"100%"} asChild>
        <Separator color="blue" orientation="horizontal" />
      </Box>
    </Container>
  );
};
