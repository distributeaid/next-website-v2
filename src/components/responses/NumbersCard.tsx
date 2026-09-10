"use client";

import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import CountUp from "react-countup";
import type { ReactNode } from "react";

import type { ResponseStatistic } from "@/utils/strapi/types";

const ICONS = {
  currency: {
    navy: "/images/icons/icon-currency-dollar.svg",
    white: "/images/icons/icon-currency-dollar-white.svg",
  },
  items: {
    navy: "/images/icons/icon-medical-kit.svg",
    white: "/images/icons/icon-medical-kit-white.svg",
  },
  shipments: {
    navy: "/images/icons/icon-parcel.svg",
    white: "/images/icons/icon-parcel-white.svg",
  },
  time: {
    navy: "/images/icons/icon-calendar.svg",
    white: "/images/icons/icon-calendar-white.svg",
  },
} as const;

export type NumbersCardVariant =
  | "featured"
  | "secondary"
  | "stacked-top"
  | "stacked-bottom"
  | "trailing";

interface NumbersCardProps {
  statistic: ResponseStatistic;
  variant: NumbersCardVariant;
  children?: ReactNode;
}

export function NumbersCard({
  statistic,
  variant,
  children,
}: NumbersCardProps) {
  const trailing = variant === "trailing";
  const square = variant === "featured" || variant === "secondary";
  const dark = variant === "secondary" || variant === "stacked-top" || trailing;
  const navyContent = variant === "stacked-bottom";
  const iconTone = navyContent ? "navy" : "white";

  return (
    <Flex
      data-testid={`statistic-card-${variant}`}
      className={`rounded-xl box-border ${
        navyContent ? "text-navy-800 bg-navy-300" : "text-white"
      } ${
        variant === "featured" ? "bg-circle-green" : dark ? "bg-navy-800" : ""
      } ${!square && !trailing ? "justify-around" : ""}`}
      direction={square ? "column" : "row"}
      align="center"
      gap={trailing ? "4" : undefined}
      mx="0"
      py="2"
      px={trailing ? "4" : "2"}
      height={square ? "360px" : "47%"}
      width="100%"
      maxWidth={trailing ? "740px" : "350px"}
    >
      <Box>
        <Image
          src={ICONS[statistic.category][iconTone]}
          width="100"
          height="100"
          alt=""
        />
      </Box>
      <Box width={trailing ? "100%" : undefined}>
        <Text as="p" size="9" align={square ? "center" : "left"} weight="bold">
          {statistic.unit}
          <CountUp start={0} end={statistic.value} duration={5} />
        </Text>
        <Flex
          direction={square ? "column" : "row"}
          align="center"
          className={trailing ? "justify-between" : "justify-around"}
          height="100%"
          flexGrow="1"
        >
          <Text
            as="p"
            size={square ? "7" : "4"}
            weight="light"
            align={variant === "featured" ? "center" : undefined}
            className="uppercase"
          >
            {statistic.label}
          </Text>
          {children}
        </Flex>
      </Box>
    </Flex>
  );
}
