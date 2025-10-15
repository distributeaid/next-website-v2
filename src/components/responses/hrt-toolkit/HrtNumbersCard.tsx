import { FC, ReactNode } from "react";
import { Box, Flex, Section, Text } from "@radix-ui/themes";
import Image from "next/image";

export type HrtNumbersCardProps = {
  icon: string;
  amount: number;
  amountPrefix?: string;
  direction?: "column" | "row";
  background: string;
  color: string;
  children?: ReactNode;
};

export const HRTNumbersCard: FC<HrtNumbersCardProps> = ({
  direction,
  amount,
  amountPrefix,
  background,
  color,
  children,
  icon,
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
      <Image src={icon} width="100" height="100"/>
      <Box>
        <Text as="p" size="9" align={direction === "column" ? "center" : "left"} weight="bold">
          {amountPrefix}
          {amount.toLocaleString()}
        </Text>
        <Box align={direction === "column" ? "center" : "left"}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
};
