import { Flex, Section, Separator } from "@radix-ui/themes";
import React, { ReactNode } from "react";

interface SideBySideProps {
  left: ReactNode;
  right: ReactNode;
  bgClass: string;
}

export const SideBySide: React.FC<SideBySideProps> = ({
  left,
  right,
  bgClass,
}) => {
  return (
    <Section px={{ initial: "4", sm: "9" }} className={bgClass}>
      <Flex
        direction={{ initial: "column", md: "row" }}
        align="start"
        justify="center"
        gap={{ initial: "4", md: "6" }}
      >
        {left}
        <Separator
          orientation={{ initial: "horizontal", md: "vertical" }}
          size="4"
          className="w-3/4 md:w-px lg:self-stretch lg:h-auto my-4"
        />
        {right}
      </Flex>
    </Section>
  );
};
