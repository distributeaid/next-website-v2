import { Box, Text } from "@radix-ui/themes";

const CopySection = () => (
  <Box
    pt={{
      initial: "90px",
      sm: "80px",
      md: "64px",
    }}
    pb="64px"
    px={{
      initial: "20px",
      sm: "0",
    }}
    maxWidth={{ sm: "80%", md: "70%" }}
    mx="auto"
  >
    <Text as="p" align={"center"} size={{ initial: "5", md: "6" }}>
      Distribute Aid ensures every dollar and diaper donated is put to good use.
      Our logistics management system reduces wasted items and shipping costs,
      including carbon emissions, by significant margins. We don’t pay our
      executives lavish salaries, and we don’t spend money on advertising.
    </Text>
  </Box>
);

export default CopySection;
