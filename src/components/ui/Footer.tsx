import { SOCIAL_LINKS, FOOTER_COLUMNS } from "@/data/constants";
import { Flex, Box, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import LogoMark from "../../../public/images/LogoMark";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      className="bg-navy-800 text-white"
      width="100%"
      px={{ md: "9", sm: "8", initial: "6" }}
      py={{ md: "8", sm: "8", initial: "6" }}
    >
      <Flex
        width="100%"
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

              <Text
                size={{
                  initial: "4",
                  sm: "3",
                  md: "5",
                }}
                className="tracking-[0.0613em]  sm:tracking-[1.25] md:tracking-[2.5]"
              >
                DISTRIBUTE AID
              </Text>
            </Flex>

            <Box
              asChild
              mt="4"
              style={{
                cursor: "pointer",
                backgroundColor: "white",
                color: "var(--accent-11)",
                borderRadius: "var(--radius-3)",
                padding: "var(--space-3) var(--space-6)",
                width: "max-content",
                textTransform: "capitalize",
                fontWeight: 500,
                transition: "all 200ms",
              }}
              display={{ initial: "block", sm: "none" }}
              className="hover:!bg-navy-500 hover:!text-white"
            >
              <Link href="/donate" target="_blank" rel="noreferrer">
                Donate
              </Link>
            </Box>
          </Flex>

          <Box
            display={{ initial: "none", sm: "block" }}
            style={{ textAlign: "justify" }}
          >
            <Text>
              Distribute aid delivers humanitarian aid to communities in need by
              coordinating end-to-end shipments, we make it easy for donors to
              connect with frontline aid organisations, understand the needs on
              the ground, and get their aid delivered.
            </Text>
          </Box>
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
              {FOOTER_COLUMNS.map((column) => (
                <Flex key={column.title} direction="column" gap="3">
                  <Heading>{column.title}</Heading>
                  {column.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.link}
                      className="hover:underline"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Flex>
              ))}
            </Flex>

            <Flex direction="column" gap="3" width={{ sm: "30%" }}>
              <Heading>Contact us</Heading>

              <Text>
                Email us at{" "}
                <Link
                  href="mailto:hello@distributeaid.org"
                  style={{ textDecoration: "underline" }}
                >
                  hello@distributeaid.org
                </Link>
              </Text>
              <Text weight="bold" size="3">
                Connect with us on social media!
              </Text>
              <Flex gap="2">
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

              <Box
                asChild
                mt="4"
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  color: "var(--accent-11)",
                  borderRadius: "var(--radius-3)",
                  padding: "var(--space-3) var(--space-6)",
                  width: "max-content",
                  textTransform: "capitalize",
                  fontWeight: 500,
                  transition: "all 200ms",
                }}
                display={{ initial: "none", sm: "block" }}
                className="hover:!bg-navy-500 hover:!text-white"
              >
                <Link href="/donate" target="_blank" rel="noreferrer">
                  Donate
                </Link>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex align="center" gap="1" mt="4">
        <Text as="p" weight="medium">
          <Link
            href="https://distributeaid.org/whistleblowing-policy"
            style={{ textDecoration: "underline" }}
          >
            Whistleblowing Policy
          </Link>
        </Text>
        <Text>|</Text>
        <Text as="p" weight="medium">
          <Link
            href="https://distributeaid.org/code-of-conduct"
            style={{ textDecoration: "underline" }}
          >
            Code of Conduct
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
