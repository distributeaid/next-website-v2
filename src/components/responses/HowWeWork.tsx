import { FC } from "react";
import { Box, Flex, Heading, Section } from "@radix-ui/themes";
import Image from "next/image";

export interface Chart {
  src: string;
  width: number;
  height: number;
}

interface HowWeWorkProps {
  title: string;
  chartHorizontal: Chart;
  chartVertical: Chart;
  altText: string;
  footnote?: string;
}

export const HowWeWork: FC<HowWeWorkProps> = ({
  title,
  chartHorizontal,
  chartVertical,
  altText,
  footnote,
}) => (
  <Section>
    <Heading as="h2" align="center" className="text-navy-800" size="8">
      {title}
    </Heading>
    <Flex justify="center" p="4">
      <Image
        src={chartHorizontal.src}
        width={chartHorizontal.width}
        height={chartHorizontal.height}
        className="w-1/2 h-auto hidden md:block"
        alt={altText}
      />
      <Image
        src={chartVertical.src}
        width={chartVertical.width}
        height={chartVertical.height}
        className="w-full h-auto block md:hidden"
        alt={altText}
      />
    </Flex>
    {footnote && (
      <Box className="font-bold text-center text-lg">{footnote}</Box>
    )}
  </Section>
);
