import { Flex, Heading, Button, Box, Link } from "@radix-ui/themes";
import Image from "next/image";
import siteSettings from "@/data/site-settings.json";
import TextMark from "../brand/TextMark";
import BankInfoDialog from "./BankInfoDialog";

interface HeroSectionProps {
  heading: string;
  imgSrc: string;
  imgAlt: string;
  buttonHeading: string;
  buttonBGColor: string;
  hasLogo?: boolean;
}

const HeroSection = ({
  heading,
  imgAlt,
  imgSrc,
  buttonHeading,
  buttonBGColor,
  hasLogo = true,
}: HeroSectionProps) => {
  return (
    <Box>
      <Flex
        mb={{ initial: "270px", sm: "180px", lg: "245px" }}
        height={{ initial: "590px", sm: "550px" }}
        className="shadow-xl bg-blue-900"
      >
        <Flex
          position={"relative"}
          justify={{ initial: "center", sm: "end" }}
          height={"100%"}
          width={"100%"}
          pl={{ sm: "5%", lg: "25%" }}
          pr={{ sm: "5%", lg: "10%" }}
          className="border border-green-900"
        >
          <Box
            position={"absolute"}
            height={{ initial: "400px", sm: "550px", lg: "733px" }}
            width={{ initial: "100%", sm: "70%" }}
            className="min-[1280px]:rounded-br-[32px] overflow-hidden"
          >
            <Image fill src={imgSrc} alt={imgAlt} className="object-cover" />
          </Box>

          <Flex
            direction={"column"}
            position={"relative"}
            bottom={{ initial: "-240px", sm: "-131px", lg: "0" }}
            justify="end"
            align={{ initial: "center", sm: "start" }}
            left={{ lg: "-27%" }}
            gap={"5"}
            height={{ lg: "733px" }}
            width={"100%"}
          >
            {hasLogo && <TextMark width="240px" />}
            <Box maxWidth={{ initial: "410px" }}>
              <Heading
                as="h1"
                size={{ initial: "8", sm: "9" }}
                className="text-white md:leading-[4.5rem]"
                align={{ initial: "center", sm: "left" }}
              >
                {heading}
              </Heading>
            </Box>
            {/* link container */}
            <Flex
              p={{ initial: "6", sm: "5", lg: "7" }}
              direction={{ initial: "column", sm: "row", lg: "column" }}
              style={{ background: buttonBGColor }}
              width={{ initial: "auto", sm: "100%", lg: "670px" }}
              height={{ initial: "auto", sm: "130px", lg: "184px" }}
              gap={{ initial: "3", sm: "5" }}
              align={{ sm: "center", lg: "start" }}
              className="z-10 rounded-bl-[32px]"
            >
              <Heading
                as="h2"
                className="min-w-40 text-navy-900"
                size={{ initial: "7", sm: "6", md: "7", lg: "8" }}
                wrap={"pretty"}
                align={{ initial: "center", sm: "left" }}
              >
                {buttonHeading}
              </Heading>
              {/* links */}
              <Flex
                direction={{ initial: "column", sm: "row" }}
                gap={{ initial: "3", sm: "2", lg: "5" }}
                align={"center"}
                width={{ initial: "300px", sm: "100%" }}
                mr={{ initial: "auto", sm: "9" }}
                ml={{ initial: "auto", sm: "0" }}
              >
                <Box asChild width={{ initial: "100%", sm: "auto" }}>
                  <Button
                    className="bg-white text-black hover:bg-navy-500 hover:text-white transition-200 h-[44px]"
                    size={{ initial: "3", sm: "2", md: "3" }}
                    asChild
                  >
                    <Link
                      wrap={"nowrap"}
                      target="_blank"
                      href={siteSettings.donate.byPaypal}
                    >
                      Donate with Paypal
                    </Link>
                  </Button>
                </Box>
                <Box asChild width={{ initial: "100%", sm: "auto" }}>
                  <Button
                    className=" bg-navy-600 hover:bg-navy-500 h-[44px]"
                    size={{ initial: "3", sm: "2", md: "3" }}
                    asChild
                  >
                    <Link
                      wrap={"nowrap"}
                      target="_blank"
                      href={siteSettings.donate.byOmprakash}
                    >
                      Use a Debit/Credit card
                    </Link>
                  </Button>
                </Box>
                <BankInfoDialog />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeroSection;
