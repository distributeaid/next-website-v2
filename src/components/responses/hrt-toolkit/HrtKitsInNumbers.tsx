import { FC } from "react";
import { Flex, Heading, Section } from "@radix-ui/themes";
import Image from "next/image";
import { HRTNumbersCard, HrtNumbersCardProps } from "./HrtNumbersCard";

const placeholderData: HrtNumbersCardProps[] = [
  {
    icon: "placeholder",
    amount: 15,
    direction: "column",
    background: "navy-300",
    color: "navy-800",
  },
  {
    icon: "placeholder2",
    amount: 30,
    background: "circle-green",
    color: "white",
  },
  { icon: "placeholder3", amount: 100, background: "navy-800", color: "white" },
];

export const HrtKitsInNumbers: FC = () => {
  return (
    <>
      <Section>
        <Flex
          direction="column"
          gap="4"
          height="120px"
          className="flex-wrap"
          align="center"
          wrap="wrap"
        >
          {placeholderData.map((data, idx) => (
            <HRTNumbersCard key={`hrt_numbers_card_${idx}`} {...data} />
          ))}
        </Flex>
      </Section>
    </>
  );
};
