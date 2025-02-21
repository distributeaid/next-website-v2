import { SOCIAL_LINKS } from "@/data/constants";
import { Flex, Box, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import LogoMark from "../../../public/images/LogoMark";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      className="bg-[#082B76] w-full text-white"
      px={{ md: "9", sm: "8", initial: "6" }}
      py={{ md: "8", sm: "8", initial: "6" }}
    >
      <Flex
        className="w-full"
        direction={{ initial: "column", md: "row" }}
        justify="center"
        gap="9"
      >
        <Flex
          width={{ initial: "100%", md: "40%" }}
          direction="column"
          gap="4"
          pr={{ md: "9" }}
        >
          <Flex width="100%" justify="between">
            <Flex direction="row" gap="4" align="center">
              <LogoMark width="50" height="65"></LogoMark>
              <Text className="tracking-[0.0613em] text-lg sm:text-base md:text-xl sm:tracking-[1.25] md:tracking-[2.5]">
                DISTRIBUTE AID
              </Text>
            </Flex>
            <Flex className="sm:hidden">
              <Link
                className="cursor-pointer capitalize font-medium  hover:bg-[#4362A6] hover:text-white duration-200 text-dark-blue bg-white rounded-lg py-3 px-6 w-max mt-4"
                href="/donate"
                target=""
                rel="noreferrer"
              >
                Donate
              </Link>
            </Flex>
          </Flex>

          <Text className="text-justify hidden sm:block">
            Distribute aid delivers humanitarian aid to communities in need by
            coordinating end-to-end shipments, we make it easy for donors to
            connect with frontline aid organisations, understand the needs on
            the ground, and get their aid delivered.
          </Text>
        </Flex>
        <Flex width={{ initial: "100%", md: "60%" }} ml={{ md: "9" }}>
          <Flex
            width="100%"
            gap={{ initial: "6", sm: "9" }}
            justify="between"
            direction={{ initial: "column", sm: "row" }}
          >
            <Flex
              width={{ initial: "100%", sm: "58%" }}
              gap={{ initial: "6" }}
              justify="between"
              direction={{ initial: "row" }}
            >
              <Flex direction="column" gap="3">
                <Heading>Explore</Heading>

                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <Link href="/about-us" className="hover:underline">
                  About us
                </Link>
                <Link href="/resources/assort" className="hover:underline">
                  Resources
                </Link>
                <Link href="/tech" className="hover:underline">
                  Tech
                </Link>
                <Link href="/" className="hover:underline">
                  Newsletter
                </Link>
              </Flex>
              <Flex direction="column" gap="3">
                <Heading>Needs</Heading>
                <Link href="/" className="hover:underline">
                  Overview
                </Link>
                <Link href="/" className="hover:underline">
                  Data Explorer
                </Link>
                <Link href="/" className="hover:underline">
                  Methodology
                </Link>
              </Flex>
              <Flex direction="column" gap="3">
                <Heading>Regions</Heading>
                <Link href="/" className="hover:underline">
                  Overview
                </Link>
                <Link href="/" className="hover:underline">
                  USA
                </Link>
                <Link href="/" className="hover:underline">
                  Europe
                </Link>
                <Link href="/" className="hover:underline">
                  Middle East
                </Link>
              </Flex>
            </Flex>

            <Flex direction="column" gap="3" width={{ sm: "30%" }}>
              <Heading>Contact us</Heading>

              <Text>
                Email as at{" "}
                <Link
                  href="mailto:hello@distributeaid.org"
                  className="underline"
                >
                  hello@distributeaid.org
                </Link>
              </Text>
              <Text className="font-bold text-md">
                Connect with us on social media!
              </Text>
              <Flex className="flex space-x-2">
                {SOCIAL_LINKS.map((social) => (
                  <a href={social.link} key={social.name} target="_blank">
                    <Image
                      src={`/images/social-icons/${social.name}.svg`}
                      alt={social.name}
                      width={40}
                      height={40}
                    />
                  </a>
                ))}
              </Flex>
              <Link
                className="cursor-pointer capitalize font-medium  hover:bg-[#4362A6] hover:text-white duration-200 text-dark-blue bg-white rounded-lg py-3 px-6 w-max mt-4 hidden sm:block"
                href="/donate"
                target=""
                rel="noreferrer"
              >
                Donate
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex className="flex items-center font-medium space-x-1" mt="4">
        <a
          href="https://distributeaid.org/whistleblowing-policy"
          className="underline"
        >
          Whistleblowing Policy
        </a>
        <span>|</span>
        <a
          href="https://distributeaid.org/code-of-conduct"
          className="underline"
        >
          Code of Conduct
        </a>
      </Flex>
    </Box>

    //Initial code

    // <div className="h-[256px] w-full bg-navy-100 flex flex-col items-center justify-center text-center space-y-4">
    //   <p>
    //     Email us at{" "}
    //     <a
    //       href="mailto:hello@distributeaid.org"
    //       className="text-navy-700 font-medium"
    //     >
    //       hello@distributeaid.org (opens in your email client)
    //     </a>
    //   </p>

    //   <div className="flex items-center font-medium space-x-1">
    //     <a
    //       href="https://distributeaid.org/whistleblowing-policy"
    //       className="text-navy-700"
    //     >
    //       Whistleblowing Policy
    //     </a>
    //     <span>.</span>
    //     <a
    //       href="https://distributeaid.org/code-of-conduct"
    //       className="text-navy-700"
    //     >
    //       Code of Conduct
    //     </a>
    //   </div>

    //   <div className="flex justify-center space-x-2">
    //     {SOCIAL_LINKS.map((social) => (
    //       <a href={social.link} key={social.name} target="_blank">
    //         <Image
    //           src={`/images/social-icons/${social.name}.svg`}
    //           alt={social.name}
    //           width={40}
    //           height={40}
    //         />
    //       </a>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Footer;
