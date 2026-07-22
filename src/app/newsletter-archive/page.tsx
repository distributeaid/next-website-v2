import { Box, Text } from "@radix-ui/themes";
import { NewsletterArchiveProvider } from "@/classes/NewsletterArchiveProvider";
import Link from "next/link";

export default async function NewsletterArchive({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam ?? "1");

  const provider = new NewsletterArchiveProvider();
  const repo = await provider.listPublications({ page });

  return (
    <Box>
      <Text>Page {page}</Text>
      <ul>
        {repo.data.map((post) => (
          <li key={post.id}>
            <Link href={`/newsletter-archive/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Box>
  );
}
