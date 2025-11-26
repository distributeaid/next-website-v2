import { SOCIAL_LINKS, FOOTER_COLUMNS } from "@/data/constants";
import { Flex, Box, Heading, Text } from "@radix-ui/themes";

import LogoMark from "../../../public/images/LogoMark";
import Link from "next/link";

const buttonStyle = {
  backgroundColor: "white",
  color: "var(--accent-11)",
  transition: "all 200ms",
};

const ColumnHeading = ({ children }: { children: React.ReactNode }) => (
  <Heading
    size={{ initial: "5" }}
    style={{
      fontFamily: "var(--font-roboto)",
    }}
  >
    {children}
  </Heading>
);

const FooterLinks = () => (
  <Flex align="center" gap="2" mt="4">
    <Text as="p" weight="medium">
      <Link
        href="https://distributeaid.org/whistleblowing-policy"
        style={{ textDecoration: "underline" }}
      >
        Whistleblowing Policy
      </Link>
    </Text>
    <Text weight="bold">|</Text>
    <Text as="p" weight="medium">
      <Link
        href="https://distributeaid.org/code-of-conduct"
        style={{ textDecoration: "underline" }}
      >
        Code of Conduct
      </Link>
    </Text>
  </Flex>
);

const DonateLink = () => (
  <Box
    asChild
    style={{
      cursor: "pointer",
      borderRadius: "var(--radius-3)",
      padding: "var(--space-3) var(--space-5)",
      width: "max-content",
      textTransform: "capitalize",
      fontWeight: 500,
      ...buttonStyle,
    }}
    className="hover:!bg-navy-500 hover:!text-white"
  >
    <Link href="/donate" target="_blank" rel="noreferrer">
      Donate
    </Link>
  </Box>
);

const Footer = () => {
  return (
    <Box
      className="bg-navy-800 text-white"
      width="100%"
      px={{ md: "9", sm: "8", initial: "6" }}
      py={{ md: "8", sm: "8", initial: "6" }}
      pt={{ md: "6" }}
    >
      <Flex
        width="100%"
        direction={{ initial: "column", lg: "row" }}
        justify="center"
        gap="9"
      >
        <Flex
          width={{ initial: "100%", lg: "32%" }}
          direction="column"
          gap="4"
          pr={{ md: "9" }}
        >
          <Flex width="100%" justify="between" align="center">
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

            <Box display={{ initial: "block", lg: "none" }}>
              <DonateLink />
            </Box>
          </Flex>

          <Box display={{ initial: "none", sm: "block" }}>
            <Text>
              Distribute Aid is a grassroots-to-grassroots humanitarian aid
              organization. Founded in 2019, we coordinate relief shipments and
              manage logistics for disaster response efforts around the world.
              Our open-source tools and a committed team of volunteers allow us
              to deliver more aid for less money, while also minimizing waste
              and emissions.
            </Text>
          </Box>
          <Box className="max-xl:hidden">
            <FooterLinks />
          </Box>
        </Flex>
        <Flex
          width={{ initial: "100%", lg: "60%" }}
          ml={{ md: "9" }}
          pt={{
            md: "4",
          }}
        >
          <Flex
            width="100%"
            gap={{ initial: "6", sm: "9" }}
            justify="between"
            direction={{ initial: "column", sm: "row" }}
          >
            <Flex
              width={{ initial: "100%", sm: "58%" }}
              gap={{ initial: "9" }}
              direction={{ initial: "row" }}
            >
              {FOOTER_COLUMNS.map((column) => (
                <Flex key={column.title} direction="column" gap="3">
                  <ColumnHeading>{column.title}</ColumnHeading>
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
              <ColumnHeading>Contact us</ColumnHeading>

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
                  <a
                    href={social.link}
                    key={social.name}
                    target="_blank"
                    className="hover:!bg-navy-500 hover:!text-white"
                    style={{
                      ...buttonStyle,
                      borderRadius: "100%",
                      padding: "var(--space-1)",
                    }}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </Flex>
              <Box display={{ initial: "none", lg: "block" }} mt="4">
                <DonateLink />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box className="xl:hidden">
        <FooterLinks />
      </Box>
    </Box>
  );
};

export default Footer;
