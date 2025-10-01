import { Flex, Heading, Button, Box, Link } from "@radix-ui/themes";
import Image from "next/image";
import siteSettings from "@/data/site-settings.json";
const HeroSection = () => {
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
            overflow="hidden"
            className="xl:rounded-br-[32px]"
          >
            <Image
              fill
              style={{ objectFit: "cover" }}
              src="/images/donate/european-refugee-relief-hero-tinted.png"
              alt="european-refugee-relief-hero-tinted"
            />
          </Box>
          {/* both support and ship */}
          <Flex
            direction={"column"}
            position={"relative"}
            top={"329px"}
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
              Support us today, <br /> so communities are <br /> prepared for
              tomorrow.
            </Heading>

            {/* ship aid */}
            <Flex
              p={{ initial: "6", sm: "5", lg: "7" }}
              direction={{ initial: "column", sm: "row", lg: "column" }}
              style={{ background: "var(--green-9)" }}
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
                Ship aid to people in need.
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
                {/* should donate links open up new tab? and are these the correct links */}
                <Box asChild width={{ initial: "100%", sm: "auto" }}>
                  <Button
                    className="bg-white text-black hover:bg-navy-500 hover:text-white transition-200"
                    size={{ initial: "3", sm: "2", md: "3" }}
                    style={{ height: "44px" }}
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
                    className=" bg-navy-600 hover:bg-navy-500"
                    size={{ initial: "3", sm: "2", md: "3" }}
                    style={{ height: "44px" }}
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
                <Box asChild width={{ initial: "100%", sm: "auto" }}>
                  <Button
                    className="bg-navy-600 hover:bg-navy-500 "
                    size={{ initial: "3", sm: "2", md: "3" }}
                    style={{ height: "44px" }}
                    asChild
                  >
                    <Link
                      wrap={"nowrap"}
                      target="_blank"
                      // bank transer link TBD
                      href=""
                    >
                      Make a Bank Transfer
                    </Link>
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HeroSection;
