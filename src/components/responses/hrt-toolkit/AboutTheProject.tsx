import { FC } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import aboutOne from "../../../../public/images/photos/photo-250000-000001-usa-hrt-toolkit.jpg";
import aboutTwo from "../../../../public/images/photos/photo-250000-000002-usa-hrt-toolkit.jpg";

const list_items = [
  "The kits do not provide hormones but the sundries needed to administer safely",
  "Harm reduction kits reduce risks from needle sharing or reuse and provide trans people with privacy in a hostile political climate",
  "Access to gender-affirming hormone therapy saves lives",
];

export const AboutTheProject: FC = () => (
  <Section position="relative" width="100%" size="1">
    <Container className="bg-red-50" p="4">
      <Flex
        width="100%"
        direction="column"
        align="center"
        justify="center"
        gap="5"
      >
        <Heading
          as="h2"
          size="7"
          weight="bold"
          align="center"
          className="text-navy-800"
        >
          About The HRT Harm Reduction Toolkit Project
        </Heading>

        <Container
          px="24px"
          mb="2"
          maxWidth={{ sm: "calc(100% - 48px)", md: "calc(100% - 160px)" }}
          className="text-xl"
        >
          <Text as="p">
            Each kit includes a{" "}
            <strong>1-year supply of medical equipment</strong> necessary to
            administer injection-based hormone therapy. Each kit is worth
            approximately $65 when purchased at retail value. Using our existing
            mutual aid networks, the kits are delivered to local frontline
            organizations who distribute the kits for free to trans people in
            need.
          </Text>
          <Flex justify="between" wrap="wrap">
            <Box width={{ sm: "100vw", md: "48%" }} p="2">
              <Image
                src={aboutOne}
                className="w-full h-auto rounded-lg"
                alt="The first about image"
              />
            </Box>
            <Box width={{ sm: "100vw", md: "48%" }} p="2">
              <Image
                src={aboutTwo}
                className="w-full h-auto rounded-lg"
                alt="The second about image"
              />
            </Box>
          </Flex>
          <ul className="list-disc list-inside pl-2">
            {list_items?.map((item, index) => (
              <li key={`about_the_project_li_${index}`}>{item}</li>
            ))}
          </ul>
        </Container>
      </Flex>
    </Container>
    <Flex
      className="bg-circle-green rounded-bl-lg justify-around"
      p="2"
      width={{ sm: "100%", md: "50%" }}
      mx="auto"
      style={{ marginTop: "-15px" }}
      align="center"
    >
      <Text
        className="text-navy-800"
        size={{ sm: "3", md: "6" }}
        weight="bold"
        as="p"
      >
        Help Us Fund More Kits
      </Text>
      <Button className="bg-white text-navy-800" size="2" asChild>
        <Link
          href="https://www.omprakash.org/global/distribute-aid/crowdfund/hrt---harm-reduction-toolkit"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Donate via Omprakash
        </Link>
      </Button>
    </Flex>
  </Section>
);
