import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { NewsletterArchiveProvider } from "@/classes/NewsletterArchiveProvider";

function formatDate(unixSeconds: number | null): string | null {
  if (!unixSeconds) return null;
  return new Date(unixSeconds * 1000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NewsletterArchive({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam ?? "1");

  const provider = new NewsletterArchiveProvider();
  const repo = await provider.listPublications({
    page,
    limit: 9,
    orderBy: "publish_date",
    direction: "desc",
  });

  return (
    <Flex direction="column" gap="6" p="6" className="mx-auto max-w-5xl">
      <Flex direction="column" gap="2">
        <Heading as="h1" size="8" className="text-navy-800">
          Newsletter Archive
        </Heading>
        <Text as="p" size="3" className="text-gray-700">
          Past editions of the Distribute Aid newsletter.
        </Text>
      </Flex>

      {repo.data.length === 0 && (
        <Text as="p" size="3" className="text-gray-700">
          No newsletter editions found.
        </Text>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {repo.data.map((post) => {
          const date = formatDate(post.publish_date ?? post.displayed_date);

          return (
            <Link key={post.id} href={`/newsletter-archive/${post.slug}`}>
              <Card className="h-full overflow-hidden">
                <Flex direction="column" height="100%">
                  {post.thumbnail_url && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded">
                      <Image
                        src={post.thumbnail_url}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <Flex direction="column" gap="2" p="4" flexGrow="1">
                    {date && (
                      <Text size="2" className="text-gray-500">
                        {date}
                      </Text>
                    )}
                    <Heading as="h2" size="4" className="text-navy-800">
                      {post.title}
                    </Heading>
                    {post.subtitle && (
                      <Text as="p" size="2" className="text-gray-700">
                        {post.subtitle}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              </Card>
            </Link>
          );
        })}
      </div>

      {repo.total_pages > 1 && (
        <Flex justify="between" align="center" pt="4">
          <Button
            asChild
            variant="soft"
            className={page <= 1 ? "pointer-events-none opacity-50" : ""}
          >
            <Link href={`/newsletter-archive?page=${page - 1}`}>
              Previous
            </Link>
          </Button>
          <Text size="2" className="text-gray-500">
            Page {page} of {repo.total_pages}
          </Text>
          <Button
            asChild
            variant="soft"
            className={
              page >= repo.total_pages ? "pointer-events-none opacity-50" : ""
            }
          >
            <Link href={`/newsletter-archive?page=${page + 1}`}>Next</Link>
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
