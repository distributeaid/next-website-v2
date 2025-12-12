import { Container, Heading, Text, Flex, Link, Strong } from "@radix-ui/themes";

const DonateLandingText = () => {
  return (
    <Container
      size={{ sm: "3", lg: "4" }}
      px={"9"}
      pb={"9"}
      id="donate-supplies"
      style={{
        scrollMarginTop: "100px",
      }}
    >
      <Heading
        as="h1"
        weight={"medium"}
        size={{ initial: "8", sm: "9" }}
        style={{ color: "var(--blue-header)" }}
        align={"center"}
      >
        Donate Supplies
      </Heading>
      <Flex gap={"4"} p={"4"} m={"4"} direction={"column"} align={"center"}>
        <Text align={"center"}>
          At Distribute Aid we handle large surplus donations of supplies (4
          pallets or more). If you’re a business owner or friends with one,
          consider us for your in-kind donation program. We’ll turn your surplus
          stock into a social good by connecting you with a local hub that can
          collect your donations.
        </Text>
        <Text align={"center"}>
          If that’s you, reach out to{" "}
          <Link
            href="mailto:donate-aid@distributeaid.org"
            underline="always"
            color="blue"
          >
            donate-aid@distributeaid.org
          </Link>
        </Text>
        <Text align={"center"} weight={"bold"}>
          If you have food, clothing, medical equipment, or other items you’d
          like to donate, please contact:
        </Text>
      </Flex>
      <Flex gap={"5"} direction={"column"}>
        <Flex
          gap={"4"}
          direction={{ initial: "column", sm: "row" }}
          align={"center"}
        >
          <Text size={"8"}>🇬🇧</Text>
          <Text align={{ initial: "center", sm: "left" }}>
            <Strong>U.K. -</Strong> email us at 
            <Link
              underline="always"
              color="blue"
              href="mailto:huib@distributeaid.org"
            >
              hubs@distributeaid.org 
            </Link>
          </Text>
        </Flex>
        <Flex
          gap={"4"}
          direction={{ initial: "column", sm: "row" }}
          align={"center"}
        >
          <Text size={"8"}>🌎</Text>
          <Text align={{ initial: "center", sm: "left" }}>
            <Strong>Based elsewhere -</Strong> If you don’t know of any
            collection groups local to you, email us at{" "}
            <Link
              underline="always"
              color="blue"
              href="mailto:hello@distributeaid.org"
            >
              hello@distributeaid.org
            </Link>
            .
          </Text>
        </Flex>

        <Flex
          gap={"4"}
          direction={{ initial: "column", sm: "row" }}
          align={"center"}
        >
          <Text size={"8"}>🚚</Text>
          <Text align={{ initial: "center", sm: "left" }}>
            <Strong>Organise a shipment? -</Strong> If you’re coordinating a
            bulk donation and need logistics support, email us at{" "}
            <Link
              underline="always"
              color="blue"
              href="mailto:logistics@distributeaid.org"
            >
              logistics@distributeaid.org
            </Link>
            .
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default DonateLandingText;
