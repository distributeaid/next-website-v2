import { Box, Text } from "@radix-ui/themes";
import { NewsletterArchiveProvider } from "@/classes/NewsletterArchiveProvider";
import { use } from "react";

async function NewsletterEntry({ slug }: { slug: string }) {
  const provider = new NewsletterArchiveProvider();
  const repo = await provider.getPostsBySlug([slug]);

  const post = repo.data[0];

  if (!post) return <Text>Oh no</Text>;

  return (
    <Box>
      <Text>{post.title}</Text>
    </Box>
  );
}

export default function NewsletterEntryWrapper({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  return <NewsletterEntry slug={slug} />;
}
