import { Flex, Heading, Text, Button, Box } from "@radix-ui/themes";
import Image from "next/image";
import { relative } from "path";
const HeroSection = () => {
  return (
    <>
      {/* blue bg */}
      <Flex
        mb={"20%"}
        position={"relative"}
        height={"550px"}
        style={{ background: "#1D2F73" }}
        className="shadow-xl"
      >
        <Flex
          position={{ sm: "absolute" }}
          top={{ sm: "0" }}
          justify={"center"}
          width={"100%"}
          pl={{ sm: "25%" }}
        >
          <Flex>
            <Box position={"relative"}>
              <Image
                width={"1000"}
                height={"1000"}
                src="/images/donate/european-refugee-relief-hero-tinted.png"
                alt="european-refugee-relief-hero-tinted"
              />

              <Flex
                direction={"column"}
                position={"absolute"}
                bottom={"0"}
                left={{ sm: "-27%" }}
                gap={"7"}
                px={"4"}
                width={"100%"}
              >
                <Box width={"600px"}>
                  <Text size={{ initial: "8", sm: "9" }} className="text-white">
                    Support us today, <br /> so communities are <br /> prepared
                    for tomorrow.
                  </Text>
                </Box>
                <Flex
                  p={"7"}
                  direction={"column"}
                  style={{ background: "#DFCDE8" }}
                  width={{ initial: "100%", sm: "670px" }}
                  height={{ initial: "100%", sm: "180px" }}
                  gap={{ initial: "3", sm: "5" }}
                  className="z-10 rounded-bl-[32px]"
                >
                  <Text
                    className="text-[#051E5E]"
                    size={{ initial: "6", sm: "8" }}
                  >
                    Ship aid to people in need.
                  </Text>
                  <Flex
                    direction={{ initial: "column", sm: "row" }}
                    gap={{ initial: "3", sm: "5" }}
                  >
                    <Button
                      className="bg-white text-black hover:bg-[#4362A6] hover:text-white transition-200 cursor-pointer "
                      size={{ initial: "2", sm: "3" }}
                    >
                      Donate with Paypal
                    </Button>
                    <Button
                      className="cursor-pointer"
                      size={{ initial: "2", sm: "3" }}
                    >
                      Use a Debit/Credit card
                    </Button>
                    <Button
                      className="cursor-pointer"
                      size={{ initial: "2", sm: "3" }}
                    >
                      Make a Bank Transfer
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HeroSection;
