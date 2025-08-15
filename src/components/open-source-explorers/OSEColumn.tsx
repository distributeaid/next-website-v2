import { FC } from "react";
import OSECircle from "./OSECircle";
import { Box, Text } from "@radix-ui/themes";

type Props = {
  content: string;
  circleText: string;
  circleColorClass: string;
  circleTextColorClass?: string;
};

const OSEColumn: FC<Props> = ({
  content,
  circleText,
  circleColorClass,
  circleTextColorClass,
}) => {
  return (
    <Box mb={{ initial: "4", sm: "8" }}>
      <OSECircle
        text={circleText}
        colorClass={circleColorClass}
        textColorClass={circleTextColorClass}
      />
      {content && (
        <Text align="center" as="p" mt="2">
          {content}
        </Text>
      )}
    </Box>
  );
};

export default OSEColumn;
