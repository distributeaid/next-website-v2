import { FC } from "react";
import { Flex, Text } from "@radix-ui/themes";
import { MarkdownContent } from "../markdown/MarkdownContent";

type Props = {
  text: string;
  color: string;
  textColor?: string;
};

const OSECircle: FC<Props> = ({ text, color, textColor }) => {
  return (
    <Flex
      width="80px"
      height="80px"
      mx="auto"
      align="center"
      justify="center"
      style={{ backgroundColor: color, borderRadius: "50%" }}
    >
      {text && (
        <Text align="center" style={{ color: textColor || "#111827" }} as="div">
          <MarkdownContent content={text} />
        </Text>
      )}
    </Flex>
  );
};

export default OSECircle;
