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
import { FundProps } from "@/types/fund";

const YouDoCTA = ({ fund }: FundProps) => {
  const { do_CTA_text, do_CTA_image, donate_link } = fund;
  if (!do_CTA_text && !do_CTA_image) {
    return <></>;
  }
  return (
    <Container
      size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
      align="center"
      px="4"
    >
      <Box position={"relative"} style={{ background: "#051E5E", borderRadius: "32px" }} px={{ initial: "5", sm: "7", md:"9" }}>
        <Box className="donate-icon--upper" position={"absolute"} left="0" top="0" px={{ initial: "9.5px", sm: "12.5px", md: "18.5px" }} py={{ initial: "19.5px", sm: "26px", md: "36px" }} style={{ background: "#5AC597", borderRadius: "999px" }}>
          <Text size={{ initial: "2", sm: "3", md: "5" }} align="center" weight="medium">Donate</Text>
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
            {do_CTA_text && <Text as="div" size="3" className="text-gray-400 [&>p]:pb-3" dangerouslySetInnerHTML={{ __html: do_CTA_text }} />}
            <Button mt="27px" className="bg-[#224BA4] w-full max-w-[400px] py-[10px] h-auto">
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
        <Box className="donate-icon--lower" display={{initial: "none", sm: "block" }} position={"absolute"} right="0" bottom="0" px={{ initial: "9.5px", sm: "12.5px", md: "18.5px" }} py={{ initial: "19.5px", sm: "26px", md: "36px" }} style={{ background: "#5AC597", borderRadius: "999px", transform: "translate(35%, 35%)" }}>
          <Text size="5" align="center" weight="medium">Donate</Text>
        </Box>
      </Box>
    </Container>
  );
};

export default YouDoCTA;
