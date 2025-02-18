import { Flex, Progress, Text } from "@radix-ui/themes";

type Props = {
  raised: number | undefined;
};

const FundProgress = ({ raised }: Props) => {
  return (
    <Flex
      direction="row"
      align="center"
      gapX="3"
      px="4"
      py="3"
      style={{
        backgroundColor: "var(--green-9)",
      }}
    >
      <Progress
        value={raised}
        variant="surface"
        style={{
          backgroundColor: "var(--green-4)",
        }}
      />
      <Text size="2" color="blue" highContrast>
        {raised}%
      </Text>
    </Flex>
  );
};

export default FundProgress;
