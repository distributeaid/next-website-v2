import { Container, Text } from "@radix-ui/themes";

const Loading = () => {
  return (
    <Container pt="9" px="4" pb="9rem" align="center">
      <Text size="4" className="text-navy-900">
        Loading campaigns...
      </Text>
    </Container>
  );
};

export default Loading;
