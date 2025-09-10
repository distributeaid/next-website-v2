import { FC } from "react";
import { Section, Text } from "@radix-ui/themes";

export type HrtNumbersCardProps = {
  icon: string;
  amount: number;
  amountPrefix?: string;
  cta?: string;
  buttonLabel?: string;
  buttonLink?: string;
  direction?: "column" | "row";
  background: string;
  color: string;
};

export const HRTNumbersCard: FC<HrtNumbersCardProps> = ({
  direction,
  amount,
  background,
  color,
}) => {
  return (
    <div
      className={`w-[100px] text-${color} bg-${background} flex flex-col justify-center items-center h-${direction === "column" ? "full" : "1/2"} `}
    >
      <Text as="p">here ${amount}</Text>
    </div>
  );
};
