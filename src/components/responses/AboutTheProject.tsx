import { FC, ReactNode } from "react";
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
import Image, { StaticImageData } from "next/image";

interface AboutTheProjectProps {
  heading: string;
  summary: ReactNode;
  images: {
    img: StaticImageData;
    alt: string;
  }[];
  listItems: string[];
  ctaText: string;
  donateText: string;
  donateURL: string;
}

export const AboutTheProject: FC<AboutTheProjectProps> = ({
  heading,
  summary,
  images,
  listItems,
  ctaText,
  donateText,
  donateURL,
}) => (
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
          {heading}
        </Heading>

        <Container
          px="24px"
          mb="2"
          maxWidth={{ sm: "calc(100% - 48px)", md: "calc(100% - 160px)" }}
          className="text-xl"
        >
          <Text as="p">{summary}</Text>
          <Flex justify="between" wrap="wrap">
            {images.map(({ img, alt }, index) => (
              <Box key={index} width={{ sm: "100vw", md: "48%" }} p="2">
                <Image
                  src={img}
                  className="w-full h-auto rounded-lg"
                  alt={alt}
                />
              </Box>
            ))}
          </Flex>
          <ul className="list-disc list-inside pl-2">
            {listItems?.map((item, index) => (
              <li key={`about_the_project_li_${index}`}>{item}</li>
            ))}
          </ul>
        </Container>
      </Flex>
    </Container>
    <Flex
      className="bg-circle-green rounded-bl-lg justify-around mt-[-15px]"
      p="2"
      width={{ sm: "100%", md: "50%" }}
      mx="auto"
      align="center"
    >
      <Text
        className="text-navy-800"
        size={{ sm: "3", md: "6" }}
        weight="bold"
        as="p"
      >
        {ctaText}
      </Text>
      <Button className="bg-white text-navy-800" size="2" asChild>
        <Link href={donateURL} target={"_blank"} rel="noopener noreferrer">
          {donateText}
        </Link>
      </Button>
    </Flex>
  </Section>
);
