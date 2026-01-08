import { Box, Text, Flex } from "@radix-ui/themes";
import HeroSection from "../ui/HeroSection";
import { FaRegCircleCheck } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      {/* <Box
        style={{
          backgroundColor: "#5AC597",
        }}
      ></Box> */}
      <HeroSection
        heading="Your Mutual Aid Logistic
        Experts"
        imgSrc="/images/home/hero-image.jpg"
        imgAlt="hero image"
        buttonHeading="Ship aid to people in need."
        buttonBGColor="#DFCDE8"
      />
    </>
  );
};

export default Hero;
