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
      height="248px"
      p="10px"
      className={`border border-[#12121226] bg-white rounded-xl ${className}`}
    >
      <Flex
        width="100%"
        height="100%"
        className="bg-navy-200 rounded-lg p-10"
        direction="column"
        gap="8"
        justify="between"
      >
        <Flex align="start" justify="center" gap="5">
          {icon}
          <Text className="text-navy-900" weight="light" size="9">
            {value}
          </Text>
        </Flex>

        <Heading
          className="text-navy-900"
          as="h2"
          weight="regular"
          size="8"
          align="center"
        >
          {label}
        </Heading>
      </Flex>
    </Box>
  );
};

export default ImpactCard;
