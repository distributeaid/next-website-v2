import { Flex, Heading, Button, Box, Link } from "@radix-ui/themes";
import Image from "next/image";
import siteSettings from "@/data/site-settings.json";

interface HeroSectionProps {
  heading: string;
  imgSrc: string;
  imgAlt: string;
  buttonHeading: string;
  buttons: {
    label: string;
    href: string;
    invertColors?: boolean;
    targetBlank?: boolean;
  }[];
}

const HeroSection = ({
  heading,
  imgAlt,
  imgSrc,
  buttonHeading,
  buttons,
}: HeroSectionProps) => {
  return (
    <>
      {/* blue bg */}
      <Flex
        mb={{ initial: "30%", sm: "10%" }}
        height={"550px"}
        // color also used in sponsor section, so maybe save it as background?
        style={{ background: "var(--blue-background)" }}
        className="shadow-xl"
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
            className="lg:rounded-br-[32px] overflow-hidden"
          >
            <Image fill src={imgSrc} alt={imgAlt} />
          </Box>
          {/* both support and ship */}
          <Flex
            direction={"column"}
            position={"relative"}
            bottom={"-209px"}
            left={{ lg: "-27%" }}
            gap={"7"}
            width={"100%"}
          >
            {/* support us */}

            <Heading
              as="h1"
              size={{ initial: "8", sm: "9" }}
              className="text-white"
              align={{ initial: "center", sm: "left" }}
            >
              {heading.split("\n").map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </Heading>

            {/* ship aid */}
            <Flex
              p={{ initial: "6", sm: "5", lg: "7" }}
              direction={{ initial: "column", sm: "row", lg: "column" }}
              style={{ background: "#DFCDE8" }}
              width={{ initial: "auto", sm: "100%", lg: "670px" }}
              height={{ initial: "auto", sm: "130px", lg: "184px" }}
              gap={{ initial: "3", sm: "1", lg: "5" }}
              align={{ sm: "center", lg: "start" }}
              mx={{ initial: "auto", sm: "0" }}
              className="z-10 rounded-bl-[32px] "
            >
              <Heading
                as="h2"
                style={{ color: "var(--blue-header)" }}
                className="min-w-40"
                size={{ initial: "7", sm: "6", md: "7", lg: "8" }}
                wrap={"pretty"}
                align={{ initial: "center", sm: "left" }}
              >
                {buttonHeading}
              </Heading>
              {/* donate links */}
              <Flex
                direction={{ initial: "column", sm: "row" }}
                gap={{ initial: "3", sm: "2", lg: "5" }}
                align={"center"}
                width={{ initial: "300px", sm: "100%" }}
                mr={{ initial: "auto", sm: "9" }}
                ml={{ initial: "auto", sm: "0" }}
              >
                {buttons.map(({ label, href, invertColors, targetBlank }) => (
                  <Box
                    asChild
                    width={{ initial: "100%", sm: "auto" }}
                    key={href}
                  >
                    <Button
                      className={
                        invertColors
                          ? "bg-navy-600 hover:bg-navy-500 "
                          : "bg-white text-black hover:bg-navy-500 hover:text-white transition-200"
                      }
                      size={{ initial: "3", sm: "2", md: "3" }}
                      asChild
                    >
                      <Link
                        wrap={"nowrap"}
                        target={targetBlank ? "_blank" : undefined}
                        href={href}
                      >
                        {label}
                      </Link>
                    </Button>
                  </Box>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HeroSection;
