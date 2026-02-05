import { FC } from "react";
import { Flex, Text } from "@radix-ui/themes";
import { MarkdownContent } from "../markdown/MarkdownContent";

type Props = {
  text: string;
  colorClass: string;
  textColorClass?: string;
  isMarkdown?: boolean;
};

const OSECircle: FC<Props> = ({
  text,
  colorClass,
  textColorClass,
  isMarkdown,
}) => {
  return (
    <Flex
      width="80px"
      height="80px"
      mx="auto"
      align="center"
      justify="center"
      className={`${colorClass || "bg-circle-blue"} rounded-[50%]`}
    >
      {text && (
        <Text
          align="center"
          className={textColorClass || "text-gray-900"}
          as="div"
        >
          {isMarkdown ? <MarkdownContent content={text} /> : text}
        </Text>
      )}
    </Flex>
  );
};

export default OSECircle;
