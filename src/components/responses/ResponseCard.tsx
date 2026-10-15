import { FC } from "react";
import Link from "next/link";
import { Button, Card, Flex, Heading } from "@radix-ui/themes";

import type { ResponseOverview } from "@/utils/strapi/types";
import { FallbackImage } from "@/components/image/FallbackImage";
import { StandInPhoto } from "@/components/image/StandInPhoto";
import { MarkdownContent } from "@/components/markdown/MarkdownContent";


export type ResponseCardProps = {
  response: ResponseOverview;
  fallbackIndex?: number;
};

export const ResponseCard: FC<ResponseCardProps> = ({
  response,
  fallbackIndex = 0,
}) => {
  const image = response.imageGallery?.[0];

  return (
    <Card className="h-full overflow-hidden">
      <Flex direction="column" height="100%">
        {image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded">
            <FallbackImage
              src={image.imageURL}
              alt={image.altText ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fallback={
                <StandInPhoto
                  index={fallbackIndex}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              }
            />
          </div>
        )}
        <Flex direction="column" gap="3" p="4" flexGrow="1">
          <Heading as="h2" size="5" className="text-navy-800">
            {response.name}
          </Heading>
          {response.description && (
            <MarkdownContent
              content={response.description}
              components={{ a: ({ children }) => <span>{children}</span> }}
              wrapper={(children) => (
                <div className="line-clamp-3 text-base leading-6 text-gray-700">
                  {children}
                </div>
              )}
            />
          )}
          <Flex flexGrow="1" align="end">
            <Button
              asChild
              className="bg-navy-700 text-white hover:bg-navy-800"
            >
              <Link href={`/responses/${response.slug}`}>See Details</Link>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
