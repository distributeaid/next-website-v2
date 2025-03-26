import { Box, Container, Heading, Text, Flex } from "@radix-ui/themes";

import Image from "next/image";

const DonateLandingText = () => {
  return (
    <Container size={{ sm: "3", lg: "4" }} px={"9"} pb={"9"}>
      <Heading
        as="h1"
        weight={"medium"}
        size={{ initial: "8", sm: "9" }}
        style={{ color: "var(--blue-header)", textAlign: "center" }}
      >
        Donate Supplies
      </Heading>
      <Flex
        gap={"4"}
        p={"4"}
        m={"4"}
        direction={"column"}
        align={"center"}
        className="text-center"
      >
        <Text>
          While we help distribute shipments, we can’t collect items ourselves.
          However, we can usually let you know which local hub you can turn to
          with your donations.
        </Text>
        <Text weight={"bold"}>
          If you have food, clothing, medical equipment, or other items you’d
          like to span donate, please contact:
        </Text>
      </Flex>
      <Flex gap={"5"} direction={"column"}>
        {/* unsure if links are correct */}
        <Flex
          gap={"4"}
          direction={{ initial: "column", sm: "row" }}
          align={"center"}
        >
          <Image
            width={40}
            height={40}
            src="/images/donate/uk-flag.png"
            alt="uk flag"
          />
          <Text align={{ initial: "center", sm: "left" }}>
            <span className="font-bold">U.K. -</span> email us at 
            <a
              style={{ color: "blue" }}
              className=" underline"
              href="mailto:huib@distributeaid.org"
            >
              hubs@distributeaid.org 
            </a>
          </Text>
        </Flex>
        <Flex
          gap={"4"}
          direction={{ initial: "column", sm: "row" }}
          align={"center"}
        >
          <Image
            width={40}
            height={40}
            src="/images/donate/globe-showing-americas.png"
            alt="globe showing the americas"
          />
          <Text align={{ initial: "center", sm: "left" }}>
            <span className="font-bold">Based elsewhere -</span> If you don’t
            know of any collection groups local to you, email us at{" "}
            <a
              style={{ color: "blue" }}
              className=" underline"
              href="mailto:hello@distributeaid.org"
            >
              hello@distributeaid.org
            </a>
            .
          </Text>
        </Flex>

        <Flex
          gap={"4"}
          direction={{ initial: "column", sm: "row" }}
          align={"center"}
        >
          <Image
            width={40}
            height={40}
            src="/images/donate/delivery-truck.png"
            alt="delivery truck"
          />
          <Text align={{ initial: "center", sm: "left" }}>
            <span className="font-bold">Organise a shipment? -</span> If you’re
            coordinating a bulk donation and need logistics support, email us at{" "}
            <a
              style={{ color: "blue" }}
              className=" underline"
              href="mailto:logistics@distributeaid.org"
            >
              logistics@distributeaid.org
            </a>
            .
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default DonateLandingText;
