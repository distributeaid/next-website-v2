import {
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  Section,
  Separator,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

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
  "Mintlify",
];

export const TechStackSection = () => {
  return (
    <Section mx={{ initial: "2", sm: "9", md: "94px" }}>
      <Separator orientation="horizontal" className="w-full bg-navy-900" />
      <Grid gap="5" my="7" columns={{ initial: "1", md: "2" }}>
        <Flex gap="4" direction="column">
          <Heading size="8" className="text-navy-900">
            Our Tech Stack
          </Heading>
          <Text size="5" className="text-navy-900">
            We use the following technologies (and more). No need for deep
            familiarity with each — this just gives you an idea of what to
            expect.
          </Text>
          <Box>
            {technologies.map((item, index) => (
              <li
                key={index}
                className="text-navy-900 font-medium leading-7 text-2xl"
              >
                {item}
              </li>
            ))}
          </Box>
          <Text size="4" className="text-navy-900">
            Check out our{" "}
            <Link href="https://github.com/distributeaid">Github</Link> for more
            info!
          </Text>
        </Flex>
        <Box
          className="bg-[var(--green-9)] rounded-ss-3xl rounded-es-3xl"
          px="8"
          py="7"
        >
          <Image
            src="/images/tech/tech-stack-image.png"
            alt="Tech stack image"
            style={{
              width: "100%",
              height: "100%",
            }}
            width={537}
            height={357}
          />
        </Box>
      </Grid>
      <Separator orientation="horizontal" className="w-full bg-navy-900" />
    </Section>
  );
};
