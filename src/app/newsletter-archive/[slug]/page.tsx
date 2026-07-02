import { Box, Text } from "@radix-ui/themes";
import { use } from "react";

export default function NewsletterEntry({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  return (
    <Box>
      <Text>{slug}</Text>
    </Box>
  );
}
