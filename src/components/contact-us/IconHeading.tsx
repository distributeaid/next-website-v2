import cx from "classnames";
import { Box, Flex, Text } from "@radix-ui/themes";
import type { IconType } from "react-icons";

interface IconHeadingProps {
  Icon: IconType;
  title: string;
  color?: "blue" | "green" | "pink" | "grey";
}

const IconHeading = ({ Icon, title, color = "blue" }: IconHeadingProps) => {
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

export default IconHeading;
