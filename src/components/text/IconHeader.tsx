import cx from "classnames";
import { Box, Flex, Text } from "@radix-ui/themes";
import type { IconType } from "react-icons";

export type IconHeaderColor = "blue" | "green" | "pink" | "grey";

interface IconHeaderProps {
  Icon: IconType;
  title: string;
  color?: IconHeaderColor;
}

const IconHeader = ({ Icon, title, color = "blue" }: IconHeaderProps) => {
  const classes = cx("rounded-full p-2 flex items-center justify-center", {
    "bg-circle-blue": color === "blue",
    "bg-circle-green": color === "green",
    "bg-circle-pink": color === "pink",
    "bg-circle-grey": color === "grey",
  });

  return (
    <Flex align="center" gap="5">
      <Box
        className={classes}
        style={{ aspectRatio: "1/1" }}
        width={{ initial: "70px", md: "80px" }}
        height={{ initial: "70px", md: "80px" }}
      >
        <Icon size={40} className={cx({ "text-white": color === "blue" })} />
      </Box>
      <Text
        size={{ initial: "6", md: "7" }}
        style={{ color: "#224BA4" }}
        weight="bold"
      >
        {title}
      </Text>
    </Flex>
  );
};

export default IconHeader;
