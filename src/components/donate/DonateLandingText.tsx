import { Container, Heading, Text, Flex, Link, Strong } from "@radix-ui/themes";

const DonateLandingText = () => {
  return (
    <Container
      size={{ sm: "3", lg: "4" }}
      px={"9"}
      pb={"9"}
      id="donate-supplies"
      className="scroll-mt-[100px]"
    >
      <Heading
        as="h1"
        weight={"medium"}
        size={{ initial: "8", sm: "9" }}
        className="text-navy-900"
        align={"center"}
      >
        Donate Supplies
      </Heading>
      <Flex gap={"4"} p={"4"} m={"4"} direction={"column"} align={"center"}>
        <Text align={"center"}>
          At Distribute Aid we handle large surplus donations of food, clothing,
          medical equipment or other supplies. If you’re a business owner or
          friends with one, consider us for your in-kind donation program. We’ll
          turn your surplus stock (4 pallets or more) into a social good by
          connecting you with a local hub that can collect your donations.
        </Text>
        <Text align={"center"} weight={"bold"}>
          If that’s you, reach out to{" "}
          <Link
            href="mailto:donate-aid@distributeaid.org"
            underline="always"
            color="blue"
          >
            donate-aid@distributeaid.org
          </Link>
        </Text>
      </Flex>
      <Flex gap={"5"} direction={"column"} align={"center"}>
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
