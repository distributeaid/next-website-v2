import {
  Box,
  Card,
  Inset,
  Theme,
  Text,
  Strong,
  Button,
  Flex,
} from "@radix-ui/themes";
import React from "react";

const DonateButtons = () => {
  return (
    <>
      <Box style={{ backgroundColor: "#DFCDE8" }} px="9" py="9" maxHeight="200px">
        <Text style={{ color: "#051E5E"}} color="blue" size="8" >Ship aid to people in need.</Text>
        <Flex gap="8" mt="6">
          <Button style={{ backgroundColor: "white", color: "#051E5E", padding: "20px" }}>
            <a className="" href="#">Donate with Paypal</a>
          </Button>
          <Button style={{ padding: "20px"}}>
            <a href="#">Use a Debit/Credit Card</a>
          </Button>
          <Button style={{ padding: "20px"}}>
            <a className="" href="#">Make a Bank Transfer</a>
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default DonateButtons;
