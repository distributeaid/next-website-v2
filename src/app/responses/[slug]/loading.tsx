import { Container, Text } from "@radix-ui/themes";

const Loading = () => {
  return (
    <Container pt="9" px="4" pb="9rem" align="center">
      <Text as="p" size="4" align="center" className="text-navy-900">
        Loading response...
      </Text>
    </Container>
  );
};

export default Loading;
