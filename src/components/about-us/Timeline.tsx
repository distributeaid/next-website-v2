import classNames from "classnames";
import {
  Box,
  Flex,
  Section,
  Container,
  Card,
  Inset,
  Separator,
  Heading,
  Text,
  Link,
} from "@radix-ui/themes";
import Image from "next/image";

import { data } from "@/data/timeline-data";

export const Timeline: React.FC = () => {
  return (
    <Section aria-labelledby="our-history-heading">
      <Container size="4">
        <Heading
          as="h2"
          size={{ initial: "8", md: "9" }}
          mb="6"
          weight="bold"
          className="text-navy-900"
          align="center"
          id="our-history-heading"
        >
          Our History
        </Heading>
        <Flex
          direction="row"
          gap="7"
          justify="center"
          display={{ initial: "none", sm: "flex" }}
        >
          <Link href="#2025" size="4">
            2025
          </Link>
          <Link href="#2024" size="4">
            2024
          </Link>
          <Link href="#2023" size="4">
            2023
          </Link>
          <Link href="#2022" size="4">
            2022
          </Link>
          <Link href="#2021" size="4">
            2021
          </Link>
          <Link href="#2020" size="4">
            2020
          </Link>
          <Link href="#2019" size="4">
            2019
          </Link>
          <Link href="#2018" size="4">
            2018
          </Link>
        </Flex>
        <Box
          width="76%"
          mx="auto"
          display={{ initial: "none", sm: "block", md: "none" }}
        >
          <Separator mt="6" size="4" className="bg-navy-900 h-[2px]" />
        </Box>
        <Box
          className="space-y-3 md:space-y-[-60px]"
          mx={{ initial: "4", sm: "8" }}
        >
          {[...data].reverse().map((item, index) => (
            <Flex
              id={item.anchor}
              className="scroll-mt-28 justify-center md:justify-normal md:even:flex-row-reverse"
              align="center"
              position="relative"
              key={index}
              pt={{ initial: "116px", sm: "100px", md: "96px" }}
              pb={{ initial: "40px" }}
            >
              {/* Separator */}
              {index === 0 && (
                <Box
                  asChild
                  position="absolute"
                  top="50%"
                  left={{ initial: "50%", sm: "50%" }}
                  width="2px"
                  display={{ initial: "block", sm: "none", md: "block" }}
                  height="50%"
                >
                  <Separator
                    orientation="vertical"
                    size="4"
                    className="bg-navy-900"
                  />
                </Box>
              )}
              {index !== 0 && data.length - 1 !== index && (
                <Box
                  asChild
                  position="absolute"
                  top="5"
                  left={{ initial: "50%", sm: "50%" }}
                  width="2px"
                  display={{ initial: "block", sm: "none", md: "block" }}
                >
                  <Separator
                    orientation="vertical"
                    size="4"
                    className="bg-navy-900"
                  />
                </Box>
              )}
              {index !== 0 && data.length - 1 === index && (
                <Box
                  asChild
                  position="absolute"
                  top="5"
                  left={{ initial: "50%", sm: "50%" }}
                  width="2px"
                  display={{ initial: "block", sm: "none", md: "block" }}
                  height="50%"
                >
                  <Separator
                    orientation="vertical"
                    size="4"
                    className="bg-navy-900"
                  />
                </Box>
              )}
              {/* Marker */}
              <Flex
                className={classNames(
                  `leading-[23.44px]  rounded-full border-white shadow-md ${item.bgColor}`,
                  item.bgColor === "bg-circle-blue"
                    ? "text-gray-50"
                    : "text-gray-900",
                  "absolute md:relative lg:absolute",
                )}
                align="center"
                justify="center"
                left={{
                  initial: "calc(50% - 40px)",
                  sm: "auto",
                  md: "calc(50% - 40px)",
                  lg: "calc(50% - 50px)",
                }}
                top={{
                  initial: "3",
                  sm: "calc(50% - 40px)",
                  lg: "calc(50% - 50px)",
                }}
                height={{ initial: "80px", lg: "100px" }}
                width={{ initial: "80px", lg: "100px" }}
                direction="column"
              >
                <Text weight="bold" align="center" size="2">
                  {item.period.split(" ")[0]}
                </Text>
                <Text weight="bold" align="center" size="2">
                  {item.period.split(" ")[1]}
                </Text>
              </Flex>

              {/* Image */}
              {/* leave space for the timeline marker plus a bit of separation */}
              <Box
                asChild
                width={{
                  initial: "100%",
                  sm: "80%",
                  md: "calc(50% - 40px - 12px)",
                  lg: "calc(50% - 50px - 12px)",
                }}
                mx={{ initial: "5", md: "2" }}
              >
                <Card
                  variant="ghost"
                  className="shadow-lg bg-white rounded-3xl"
                >
                  <Flex gap="3" direction="column">
                    <Image
                      src={item.imageSrc}
                      alt="Timeline"
                      height={256}
                      width={1200}
                      sizes="100vw"
                      style={{
                        height: "calc(37.5vh - 30px)",
                        minHeight: "150px",
                        maxHeight: "200px",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "15px",
                      }}
                    />
                    {item.title && (
                    <Heading 
                      as="h3" 
                      className="text-navy-900"
                      align={{ initial: "center", sm: "left" }}
                    >
                      {item.title}
                    </Heading>
                    )}
                    <Text
                      as="div"
                      size="2"
                      align={{ initial: "center", sm: "left" }}
                      className="text-navy-900"
                    >
                      {item.description}
                    </Text>
                  </Flex>
                </Card>
              </Box>
            </Flex>
          ))}
        </Box>
      </Container>
    </Section>
  );
};
