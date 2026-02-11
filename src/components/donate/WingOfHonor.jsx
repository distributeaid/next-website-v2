import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

const WingOfHonor = () => (
  <Box>
    <Container size={{ sm: "3", lg: "4" }}>
      <Flex gap={"4"} p={"4"} m={"4"} direction={"column"} align={"center"}>
        <Heading
          as="h2"
          weight={"medium"}
          size={{ initial: "8", sm: "9" }}
          className="text-navy-900"
          align={"center"}
        >
          Donor Wing of Honor
        </Heading>
        <Text align="center">
          These people have made extraordinary contributions to Distribute Aid’s
          work around the world. Their support has enabled us to defend human
          dignity and provide lifesaving aid to communities struck by natural or
          manmade disasters. We will be forever grateful for their generosity.
        </Text>
      </Flex>
    </Container>
    <Image
      src="/images/illus/illus-wing-of-honor.png"
      width={2500}
      height={1250}
      alt="Distribute Aid Logo: A flock of doves stylized by stacking wings behind the main outline of a dove."
      id="donor-wing-of-honor"
      className="mx-auto"
    />
  </Box>
);

export default WingOfHonor;
