import { Box, Flex, Section, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import donatebg from "../../../public/images/donatebg.png";

const LandingSection = () => {
  return (
    <>
      <Section size="1" style={{ backgroundColor: "#5AC597" }} />
      <Box px="9" style={{ backgroundColor: "#051E5E" }}>
        <Flex justify="end" px="8">
          <Image
           
            src={donatebg}
            alt="donate-page-background"
          />
        </Flex>
        <Box>
        <Flex width="46rem" align="center" justify="center" position="absolute" top="0" bottom="0" px="9" >
          <Text style={{ color: "#FFFFFF", font: "Yantramanav" }} size="9">
            Support us today, so communities are prepared for tomorrow.
          </Text>
        </Flex>
        </Box>
      </Box>
    </>
  );
};

export default LandingSection;

//
