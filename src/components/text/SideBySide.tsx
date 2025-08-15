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
      px={{ initial: "7", sm: "8", md: "9" }}
      className={bgClass}
    >
      <Flex
        direction={{ initial: "column", md: "row" }}
        align={{ initial: "center", md: "start" }}
        justify="center"
        gap= "8"
      >
        <Box flexBasis={{ md: "50%" }} flexGrow="1">
          {left}
        </Box>
        <Box
          mx={{ initial: "0", md: "4" }}
          className="self-stretch"
        >
          <Separator
            orientation={{ initial: "horizontal", md: "vertical" }}
            size="4"
          />
        </Box>
        <Box flexBasis={{ md: "50%" }} flexGrow="1">
          {right}
        </Box>
      </Flex>
    </Section>
  );
};
