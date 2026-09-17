import { Box, Text } from "@radix-ui/themes";
import { NewsletterArchiveProvider } from "@/classes/NewsletterArchiveProvider";
import { use } from "react";
import * as cheerio from "cheerio";

async function NewsletterEntry({ slug }: { slug: string }) {
  const provider = new NewsletterArchiveProvider();
  const repo = await provider.getPostsBySlug(slug);

  const post = repo.data[0];

  function extractBodyHtml(html: string | undefined): string {
    if (!html) return "Failed to get HTML";

    const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    const htmlBody = (match?.[1] ?? html).trim();
    const $ = cheerio.load(htmlBody);
    $(".bh__byline_social_wrapper").remove();
    // $("*").removeAttr("style").removeAttr("class");
    $("style").remove();

    return $.html();
  }

  if (!post) return <Text>Oh no</Text>;

  return (
    <Box>
      {post.content?.free?.web && (
        <article
          dangerouslySetInnerHTML={{
            __html: extractBodyHtml(post.content.free.web),
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
