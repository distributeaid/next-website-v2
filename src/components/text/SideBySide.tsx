import { Box, Flex, Section, Separator } from "@radix-ui/themes";
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
    <Section
      maxWidth="7xl"
      px={{ initial: "4", md: "9" }}
      className={bgClass}
    >
      <Flex
        direction={{ initial: "column", sm: "column", md: "row" }}
        align="center"
        justify="center"
        gap={{ initial: "4" }}
      >
        <Box width={{ initial: "100%", md: "1/2" }}>
          {left}
        </Box>
        <Separator
          orientation={{ initial: "horizontal", md: "vertical" }}
          size="4"
          className="w-full sm:my-4 md:w-px md:self-stretch md:h-auto md:mx-4"
        />
        <Box width={{ initial: "100%", md: "1/2" }}>
          {right}
        </Box>
      </Flex>
    </Section>
  );
};
