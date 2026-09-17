"use client";

import { Button, Container, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <Container pt="9" px="4" pb="9rem" align="center">
      <Heading as="h1" size="7" className="text-navy-900" align="center">
        We couldn&apos;t load this response
      </Heading>
      <Text as="p" size="4" mt="3" className="text-navy-900" align="center">
        There was a problem on our end. Please try again.
      </Text>
      <Flex gap="3" mt="5" justify="center">
        <Button
          size="3"
          className="bg-navy-600 hover:bg-navy-500 cursor-pointer"
          onClick={reset}
        >
          Try again
        </Button>
        <Button size="3" variant="outline" asChild>
          <Link href="/responses">View all responses</Link>
        </Button>
      </Flex>
    </Container>
  );
}
