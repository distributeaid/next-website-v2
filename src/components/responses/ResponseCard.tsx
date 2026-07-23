import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";

import { ResponseOverview } from "@/data/responses";

const ABOUT_PREVIEW_LENGTH = 180;

const truncateAbout = (text: string) => {
  if (text.length <= ABOUT_PREVIEW_LENGTH) {
    return text;
  }

  return `${text.slice(0, ABOUT_PREVIEW_LENGTH)}…`;
};

export type ResponseCardProps = {
  response: ResponseOverview;
};

export const ResponseCard: FC<ResponseCardProps> = ({
  response: { name, url, headerImage, headerImageAlt, about },
}) => (
  <Card className="h-full overflow-hidden">
    <Flex direction="column" height="100%">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded">
        <Image
          src={headerImage}
          alt={headerImageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <Flex direction="column" gap="3" p="4" flexGrow="1">
        <Heading as="h2" size="5" className="text-navy-800">
          {name}
        </Heading>
        <Text as="p" size="3" className="text-gray-700">
          {truncateAbout(about)}
        </Text>
        <Flex flexGrow="1" align="end">
          <Button asChild className="bg-navy-700 text-white hover:bg-navy-800">
            <Link href={url}>See Details</Link>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  </Card>
);
