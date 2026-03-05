import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";

interface ImpactCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({
  icon,
  value,
  label,
  className,
}) => {
  return (
    <Box
      width="100%"
      height="250px"
      p="10px"
      className={`border  border-slate-300 bg-white rounded-xl  ${className}`}
    >
      <Flex
        width="100%"
        height="100%"
        className="bg-navy-200 rounded-lg p-10"
        direction="column"
        justify="between"
      >
        <Flex align="center" justify="center" gap="5">
          <span aria-hidden="true">
            {React.cloneElement(
              icon as React.ReactElement<React.SVGProps<SVGSVGElement>>,
              { focusable: false },
            )}
          </span>
          <Text
            className="text-navy-900 text-[40px] lg:text-[55px]"
            weight="light"
          >
            {value}
          </Text>
        </Flex>

        <Heading
          className="text-navy-900"
          as="h3"
          weight="regular"
          size={{ initial: "6", md: "6", lg: "8" }}
          align="center"
        >
          {label}
        </Heading>
      </Flex>
    </Box>
  );
};

export default ImpactCard;
