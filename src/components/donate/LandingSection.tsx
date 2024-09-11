import { Box, Flex, Grid, Section, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import donatebg from "../../../public/images/donatebg.png";
import DonateButtons from "./DonateButtons";

const LandingSection = () => {
  return (
    <>
      <Section size="1" style={{ backgroundColor: "#5AC597" }} />
      <Box style={{ backgroundColor: "#051E5E" }} height="580px">
        <Box px="9">
          <Flex justify="end" px="8">
            <Image src={donatebg} alt="donate-page-background" />
          </Flex>
          <Box>
            <Flex
              align="center"
              justify="center"
              position="absolute"
              top="0"
              bottom="0"
              px="7"
            >
              <Box>
                <Separator className="mt-72"></Separator>
                <Box maxWidth="600px">
                  <Text
                    style={{ color: "#FFFFFF", font: "Yantramanav" }}
                    size="9"
                  >
                    Support us today, so communities are prepared for tomorrow.
                  </Text>
                </Box>
                <Box width="780px" mt="9">
                  <DonateButtons />
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LandingSection;

//
