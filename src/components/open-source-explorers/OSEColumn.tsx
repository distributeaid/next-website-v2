import { FC } from "react";
import OSECircle from "./OSECircle";
import { Box, Text } from "@radix-ui/themes";

type Props = {
  title: string;
  circleText: string;
  circleColor: string;
  circleTextColor?: string;
};

const OSEColumn: FC<Props> = ({
  title,
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
      {title && (
        <Text align="center" as="p" mt="2">
          {title}
        </Text>
      )}
    </Box>
  );
};

export default OSEColumn;
