import { Box, Button, Flex, Heading, Section } from "@radix-ui/themes";
import Link from "next/link";
import { ReactNode } from "react";

import type {
  ResponseImpactStatistics,
  ResponseStatistic,
} from "@/utils/strapi/types";
import { NumbersCard } from "./NumbersCard";

interface ImpactStatisticsProps {
  section: ResponseImpactStatistics;
}

export function ImpactStatistics({ section }: ImpactStatisticsProps) {
  const [featured, ...rest] = section.statistics;
  const trailing = rest.length === 3 ? rest.pop() : undefined;

  return (
    <Section px="4" py="0" my="4">
      <Heading
        as="h2"
        size="7"
        weight="bold"
        align="center"
        className="text-navy-800"
        mb="5"
      >
        {section.heading}
      </Heading>
      <Flex
        gap="2"
        wrap="wrap"
        align="center"
        className={
          section.statistics.length === 1
            ? "justify-center"
            : "justify-center lg:justify-between"
        }
        width="100%"
        maxWidth="740px"
        mx="auto"
      >
        <StatisticCard statistic={featured} variant="featured">
          {!trailing && <StatisticCta section={section} />}
        </StatisticCard>
        {rest.length === 1 && (
          <StatisticCard statistic={rest[0]} variant="secondary" />
        )}
        {rest.length > 1 && (
          <Flex
            height="360px"
            width="100%"
            maxWidth="350px"
            justify="between"
            direction="column"
          >
            {rest.map((statistic, index) => (
              <StatisticCard
                key={statistic.id}
                statistic={statistic}
                variant={index === 0 ? "stacked-top" : "stacked-bottom"}
              />
            ))}
          </Flex>
        )}
      </Flex>
      {trailing && (
        <Flex align="center" justify="center" mt="4">
          <StatisticCard statistic={trailing} variant="trailing">
            <StatisticCta section={section} />
          </StatisticCard>
        </Flex>
      )}
    </Section>
  );
}

interface StatisticCardProps {
  statistic: ResponseStatistic;
  variant:
    | "featured"
    | "secondary"
    | "stacked-top"
    | "stacked-bottom"
    | "trailing";
  children?: ReactNode;
}

function StatisticCard({ statistic, variant, children }: StatisticCardProps) {
  return (
    <NumbersCard statistic={statistic} variant={variant}>
      {children}
    </NumbersCard>
  );
}

function StatisticCta({ section }: ImpactStatisticsProps) {
  return (
    <Box>
      <Button className="bg-white text-navy-800" size="4" asChild>
        <Link
          href={section.cta.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate
        </Link>
      </Button>
    </Box>
  );
}
