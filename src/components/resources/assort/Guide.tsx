import { Box, Flex, Separator, Table, Text } from "@radix-ui/themes";

const data = [
  "How to quality check donated items meant for distribution;",
  "How to sort donations into standard categories;",
  "How to size clothing donations with a printable ASSORT sizing chart;",
  "How to box and label the sorted donations and ready them for shipment.",
];

export const Guide = () => {
  return (
    <Flex
      direction="column"
      className="bg-gray-50"
      width="100%"
      mx={{ initial: "2", xs: "0" }}
      p="1"
    >
      <Text size="5" className="p-3">
        The ASSORT Guide includes multiple areas of standardisation:
      </Text>
      <Separator
        orientation="horizontal"
        className="w-full self-stretch mt-1"
      />
      {data.map((item, index) => (
        <Box key={index}>
          <li className="p-3">
            <Text size="4">{item}</Text>
          </li>
          {index !== data.length - 1 && (
            <Separator
              orientation="horizontal"
              className="w-full self-stretch mt-1"
            />
          )}
        </Box>
      ))}
    </Flex>
  );
};
