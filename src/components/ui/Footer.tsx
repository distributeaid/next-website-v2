import { SOCIAL_LINKS } from "@/data/constants";
import { Flex, Box, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import LogoMark from "../../../public/images/LogoMark";
import Link from "next/link";

const Footer = () => {
  return (
    <Box className="bg-[#082B76] w-full text-white" px="9" py="9">
      <Flex
        className="w-full"
        direction={{ initial: "column", sm: "row" }}
        justify="center"
        gap="9"
      >
        <Flex width={{ sm: "40%" }} direction="column" gap="4" mr={{ sm: "9" }}>
          <Flex align="center" gap="4">
            <LogoMark width="50" height="65"></LogoMark>
            <Text className="tracking-[0.25em] text-xl">DISTRIBUTE AID</Text>
          </Flex>

          <Text className="text-justify">
            Distribute aid delivers humanitarian aid to communities in need by
            coordinating end-to-end shipments, we make it easy for donors to
            connect with frontline aid organisations, understand the needs on
            the ground, and get their aid delivered.
          </Text>
          <Flex className="flex items-center font-medium space-x-1">
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
        </Flex>
        <Flex width={{ sm: "60%" }} ml={{ sm: "9" }}>
          <Flex
            width="100%"
            gap={{ initial: "6", sm: "3" }}
            justify="between"
            direction={{ initial: "column", sm: "row" }}
          >
            <Flex direction="column" gap="3">
              <Heading>Explore</Heading>

              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/" className="hover:underline">
                About us
              </Link>
              <Link href="/" className="hover:underline">
                Resources
              </Link>
              <Link href="/" className="hover:underline">
                Tech
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
            <Flex direction="column" gap="3">
              <Heading>Contact us</Heading>

              <Text size={{ sm: "1" }}>
                Email as at{" "}
                <Link
                  href="mailto:hello@distributeaid.org"
                  className="underline"
                >
                  hello@distributeaid.org
                </Link>
              </Text>
              <Text size={{ sm: "1" }}>Connect with us on social media!</Text>
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
                className="cursor-pointer capitalize font-medium  hover:bg-[#4362A6] hover:text-white duration-200 text-dark-blue bg-white rounded-lg py-3 px-6 w-max"
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
