import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

import { MarkdownContent } from "@/components/markdown/MarkdownContent";
import type { ResponseOverview } from "@/utils/strapi/types";
import { Faq } from "./Faq";
import { HowWeWork, type Chart } from "./HowWeWork";
import ImageAttribution from "./ImageAttribution";
import { ImpactStatistics } from "./ImpactStatistics";
import { ResponseHero } from "./ResponseHero";

interface ResponsePageProps {
  overview: ResponseOverview;
  processImages?: { desktop: Chart; mobile: Chart };
}

export function ResponsePage({ overview, processImages }: ResponsePageProps) {
  const imageGallery = overview.imageGallery ?? [];
  const details = overview.details ?? [];
  const callToActionCards = overview.callToActionCards ?? [];
  const faqs = overview.faqs ?? [];

  return (
    <main className="pb-8">
      <ResponseHero title={overview.name}>{overview.subHeading}</ResponseHero>

      {overview.impactStatistics && (
        <ImpactStatistics section={overview.impactStatistics} />
      )}

      <Section>
        <Container className="bg-red-50" p="4">
          <Heading as="h2" size="7" align="center" className="text-navy-800">
            {overview.aboutHeading ?? `About ${overview.name}`}
          </Heading>
          {overview.description && (
            <Box className="mx-auto my-6 max-w-4xl text-xl">
              <MarkdownContent content={overview.description} />
            </Box>
          )}
          {imageGallery.length > 0 && (
            <Flex
              justify="between"
              wrap="wrap"
              gap="4"
              className="mx-auto max-w-4xl"
            >
              {imageGallery.map((image) => (
                <Box
                  key={image.id}
                  className="relative h-[400px] w-full overflow-hidden rounded-lg md:w-[48%]"
                >
                  {image.attributionName && image.attributionURL && (
                    <ImageAttribution
                      name={image.attributionName}
                      href={image.attributionURL}
                    />
                  )}
                  <Image
                    src={image.imageURL}
                    fill
                    className="object-cover"
                    alt={image.altText ?? ""}
                  />
                </Box>
              ))}
            </Flex>
          )}
          {details.some((detail) => detail.specifics) && (
            <Box className="mx-auto mt-6 max-w-4xl text-xl">
              <ul className="list-inside list-disc pl-2">
                {details
                  .filter((detail) => detail.specifics)
                  .map((detail) => (
                    <li key={detail.id}>{detail.specifics}</li>
                  ))}
              </ul>
            </Box>
          )}
        </Container>
        {overview.impactStatistics?.cta.bannerText && (
          <Flex
            className="bg-circle-green rounded-lg justify-around mt-[-15px]"
            p="2"
            width={{ sm: "100%", md: "50%" }}
            mx="auto"
            align="center"
          >
            <Text
              className="text-navy-800"
              size={{ sm: "3", md: "6" }}
              weight="bold"
              as="p"
            >
              {overview.impactStatistics.cta.bannerText}
            </Text>
            <Button className="bg-white text-navy-800" size="2" asChild>
              <Link
                href={overview.impactStatistics.cta.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {overview.impactStatistics.cta.buttonText}
              </Link>
            </Button>
          </Flex>
        )}
      </Section>

      {processImages && (
        <HowWeWork
          title={overview.processHeading ?? "How We Work"}
          chartHorizontal={processImages.desktop}
          chartVertical={processImages.mobile}
          altText={overview.processImageDesktop?.alternativeText ?? ""}
          footnote={overview.processFootnote ?? undefined}
        />
      )}

      {callToActionCards.length > 0 && (
        <Section>
          <Heading
            as="h2"
            align="center"
            size="8"
            className="mb-8 text-navy-800"
          >
            How To Get Involved
          </Heading>
          <Flex justify="center" wrap="wrap">
            {callToActionCards.map((card) => (
              <Box
                key={card.id}
                className="m-4 w-full max-w-md overflow-hidden rounded-md bg-navy-300"
              >
                {card.imageLink && (
                  <Box className="relative h-80 w-full">
                    {card.imageAttributionName && card.imageAttributionURL && (
                      <ImageAttribution
                        name={card.imageAttributionName}
                        href={card.imageAttributionURL}
                      />
                    )}
                    <Image
                      src={card.imageLink}
                      fill
                      className="object-cover"
                      alt={card.imageAltText ?? card.title}
                    />
                  </Box>
                )}
                <Box p="5">
                  <Heading as="h3" size="6" className="uppercase text-navy-800">
                    {card.title}
                  </Heading>
                  {card.description && (
                    <Text as="p" my="3" weight="bold">
                      {card.description}
                    </Text>
                  )}
                  {card.buttonText && card.buttonLink && (
                    <Button asChild className="bg-navy-600">
                      <Link href={card.buttonLink} target="_blank">
                        {card.buttonText}
                      </Link>
                    </Button>
                  )}
                </Box>
              </Box>
            ))}
          </Flex>
        </Section>
      )}

      {faqs.length > 0 && (
        <Faq
          faqs={faqs.map(({ question, answer }) => ({
            q: question,
            a: <>A: {answer}</>,
          }))}
        />
      )}
    </main>
  );
}
