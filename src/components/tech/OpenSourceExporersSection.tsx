import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Link,
  Button,
} from "@radix-ui/themes";

const OpenSourceExplorersSection = () => {
  return (
    <Container size={{ xs: "1", sm: "2", md: "3", lg: "4" }} align="center">
      <Flex width="100%" direction="column" align="center" justify="center">
        <Box pt={{ initial: "2", md: "6" }} pb={{ initial: "1", md: "4" }}>
          <Heading
            as="h2"
            size={{ initial: "6", sm: "7", md: "8" }}
            weight="bold"
            align="center"
            className="text-navy-900"
          >
            Open Source Explorers
          </Heading>
        </Box>
        <Flex
          width="100%"
          direction="column"
          gap="4"
          justify="center"
          align="center"
        >
          <Text
            size={{ initial: "2", sm: "3" }}
            align="center"
            className="text-navy-900"
          >
            If you’re fairly experienced in your field but have not had a chance
            to participate in open source yet, we recommend our Open Source
            Explorers program. Open Source Explorers is a structured
            educational/participatory program that gives developers, designers,
            and technical writers who are new to open source a hands-on
            introduction to contributing.
          </Text>
          <Text
            size={{ initial: "2", sm: "3" }}
            align="center"
            className="text-navy-900"
          >
            Find out more about Open Source Explorers, including when we’re
            running our next cohort!
          </Text>
          <Link>
            <Button size="4">Learn More</Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default OpenSourceExplorersSection;
