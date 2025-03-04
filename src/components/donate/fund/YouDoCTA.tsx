import {
  Flex,
  Heading,
  Separator,
  Box,
  Container,
  Text,
  Button
} from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import { Fund } from "@/types/fund";

interface HeroSectionProps {
  fund: Fund;
}

const YouDoCTA = ({ fund }: HeroSectionProps) => {
  const { do_CTA_text, do_CTA_image, donate_link } = fund;
  if (!do_CTA_text && !do_CTA_image) {
    return <></>;
  }
  return (
    <Container
      size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
      align="center"
    >
      <Box position={"relative"} style={{ background: "#051E5E", borderRadius: "32px" }} px={{ initial: "4", md:"9" }}>
        <Box position={"absolute"} left="0" top="0" px="18.5px" py="36px" style={{ background: "#5AC597", borderRadius: "999px", transform: "translate(-35%, -35%)" }}>
          <Text size="5" align="center" weight="medium">Donate</Text>
        </Box>
        <Flex
          pt="37px"
          pb="53px"
          gap="24px"
          direction={{ initial: "column", md: "row" }}
          justify="between"
          align="center"
        >
          <Box flexBasis={{ initial: "100%", md: "50%" }}>
            <Heading
              mb="20px"
              as="h2"
              size={{ initial: "7", md: "8" }}
              weight="bold"
              className="text-gray-400"
              align={{ initial: "center", xs: "left" }}
            >
              What YOU can do!
            </Heading>
            {do_CTA_text && <Text size="3" className="text-gray-400" dangerouslySetInnerHTML={{ __html: do_CTA_text }} />}
            <Button mt="20px" className="bg-[#224BA4] w-full">
                <Link
                  className="no-underline"
                  href={donate_link || ""}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Donate now
                </Link>
            </Button>
          </Box>
          {do_CTA_image && (
            <>
              <Box flexBasis={{ initial: "100%", md: "50%" }}>
                <Image
                  src={do_CTA_image || "/images/donate/ukraine-response-gallery-02.png"}
                  alt={""}
                  height={0}
                  width={0}
                  sizes={"100vw"}
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                  }}
                />
              </Box>
            </>
          )}
        </Flex>
      </Box>
    </Container>
  );
};

export default YouDoCTA;
