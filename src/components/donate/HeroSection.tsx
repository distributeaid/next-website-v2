import { Flex, Container ,Heading, Button, Box } from "@radix-ui/themes";
import Image from "next/image";

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
        {/* <Container
        size={"4"}
        > */}
          
        <Flex
          position={{ sm: "absolute" }}
          top={{ sm: "0" }}
          justify={"center"}
          width={"100%"}
          pl={{ sm: "25%" }}
          pr={{sm:"10%"}}
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
                <Box width={{initial: "100%",xs:"520px" }}>
                  <Heading as="h1" size={{ initial: "8", sm: "9" }} className="text-white">
                    Support us today, <br /> so communities are <br /> prepared
                    for tomorrow.
                  </Heading>
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
                  <Heading
                    as="h2"
                    className="text-[#051E5E]"
                    size={{ initial: "6", sm: "8" }}
                  >
                    Ship aid to people in need.
                  </Heading>
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
        {/* </Container> */}
      </Flex>
      
    </>
  );
};

export default HeroSection;
