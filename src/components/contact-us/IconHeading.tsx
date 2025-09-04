import cx from "classnames";
import { Box, Flex, Text } from "@radix-ui/themes";
import type { IconType } from "react-icons";

interface IconHeadingProps {
  Icon: IconType;
  title: string;
  color?: "blue" | "green" | "pink" | "grey";
}

const IconHeading = ({ Icon, title, color = "blue" }: IconHeadingProps) => {
  return (
    <Flex align="center" gap="5">
      <Box
        className={cx("rounded-full p-2 flex items-center justify-center", {
          "bg-circle-blue": color === "blue",
          "bg-circle-green": color === "green",
          "bg-circle-pink": color === "pink",
          "bg-circle-grey": color === "grey",
        })}
        style={{ width: "80px", height: "80px" }}
      >
        <Icon size={40} className={cx({ "text-white": color === "blue" })} />
      </Box>
      <Text size="8" weight="medium">
        {title}
      </Text>
    </Flex>
  );
};

export default IconHeading;
