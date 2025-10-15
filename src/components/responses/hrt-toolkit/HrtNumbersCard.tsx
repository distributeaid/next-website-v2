"use client";
import { FC, ReactNode } from "react";
import { Box, Flex, Section, Text } from "@radix-ui/themes";
import Image from "next/image";
import CountUp from "react-countup";

export type HrtNumbersCardProps = {
  amount: number;
  amountPrefix?: string;
  background: string;
  color: string;
  children?: ReactNode;
  direction?: "column" | "row";
  icon: string;
  iconAlt: string;
};

export const HRTNumbersCard: FC<HrtNumbersCardProps> = ({
  amount,
  amountPrefix,
  background,
  color,
  children,
  direction,
  icon,
  iconAlt,
}) => {
  return (
    <Flex
      className={`text-${color} bg-${background} rounded-xl box-border`}
      direction={direction}
      align="center"
      mx="4"
      p="2"
      height={direction === "column" ? "100%" : "45%"}
      maxWidth="300px"
    >
      <Image src={icon} width="100" height="100" alt={iconAlt}/>
      <Box>
        <Text as="p" size="9" align={direction === "column" ? "center" : "left"} weight="bold">
          {amountPrefix}
          <CountUp start={0} end={amount} duration={5} />
        </Text>
        <Box align={direction === "column" ? "center" : "left"}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
};
