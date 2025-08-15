import { FC } from "react";
import OSECircle from "./OSECircle";
import { Box, Text } from "@radix-ui/themes";

type Props = {
  content: string;
  circleText: string;
  circleColor: string;
  circleTextColor?: string;
};

const OSEColumn: FC<Props> = ({
  content,
  circleText,
  circleColor,
  circleTextColor,
}) => {
  return (
    <Box mb={{ initial: "4", sm: "8" }}>
      <OSECircle
        text={circleText}
        color={circleColor}
        textColor={circleTextColor}
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
