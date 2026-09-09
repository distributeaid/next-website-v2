import { Box, Text } from "@radix-ui/themes";
import { NewsletterArchiveProvider } from "@/classes/NewsletterArchiveProvider";
import { use } from "react";

async function NewsletterEntry({ slug }: { slug: string }) {
  const provider = new NewsletterArchiveProvider();
  const repo = await provider.getPostsBySlug(slug);

  const post = repo.data[0];

  function extractBodyHtml(html: string | undefined): string {
    if (!html) return "";

    const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    return (match?.[1] ?? html).trim();
  }

  if (!post) return <Text>Oh no</Text>;

  return (
    <Box>
      {post.content?.free?.email && (
        <article
          dangerouslySetInnerHTML={{
            __html: extractBodyHtml(post.content.free.email),
          }}
        ></article>
      )}
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
