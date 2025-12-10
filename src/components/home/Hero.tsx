import { Box, Text, Flex } from "@radix-ui/themes";
import HeroSection from "../ui/HeroSection";
import { FaRegCircleCheck } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <Box
        style={{
          backgroundColor: "#5AC597",
        }}
      >
        <Flex p="3" align="center" gap="2" mx="2">
          <FaRegCircleCheck />
          <Text>Join our team of open source tech volunteers!</Text>
        </Flex>
      </Box>
      <HeroSection
        heading="Your Mutual Aid Logistic
        Experts"
        imgSrc="/images/home/hero-image.jpg"
        imgAlt=""
        buttonHeading="Ship aid to people in need."
        buttons={[
          {
            label: "Donate with PayPal",
            href: "",
            bgWhite: true,
            targetBlank: true,
          },
          {
            label: "Use a Debit/Credit Card",
            href: "",
            targetBlank: true,
          },
          {
            label: "Make a Bank Transfer",
            href: "",
            targetBlank: true,
          },
        ]}
      />
    </>
  );
};

export default Hero;
