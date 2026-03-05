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
      px="20px"
      py="6px"
      className="bg-[#5ac597]"
    >
      <Progress value={raised} variant="surface" className="bg-[#d2f2e1]" />
      <Text size="2" color="blue" highContrast>
        {raised}%
      </Text>
    </Flex>
  );
};

export default FundProgress;
