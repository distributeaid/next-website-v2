import { Flex, Heading, Box, Container, Text, Button } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import { FundProps } from "@/types/fund";
import { MarkdownContent } from "@/components/markdown/MarkdownContent";

interface ctaProps {
  image?: string;
  heading?: string;
  text?: string;
  link: string;
  showDonateIcons?: boolean;
  bgColor?: string;
  headingColor?: string;
  textColor?: string;
  buttonClasses?: string;
  buttonText?: string;
  imageRight?: boolean;
}

const ImageTextCTA = (props: ctaProps) => {
  const {
    text, // accepts markdown content
    heading,
    image,
    link,
    showDonateIcons = false,
    bgColor,
    headingColor,
    textColor,
    buttonClasses,
    buttonText,
    imageRight = true, // set to false for a 2-up with the image on the left
  } = props;
  if (!text && !image && !heading) {
    return <></>;
  }
  return (
    <Container
      size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
      align="center"
      px="4"
      mb={{ initial: "78px", sm: "60px" }}
    >
      <Box
        position={"relative"}
        className={bgColor ? `bg-${bgColor}` : "bg-[var(--blue-header)]"}
        style={{
          borderRadius: "32px",
        }}
        px={{ initial: "20px", sm: "7", md: "9" }}
      >
        {showDonateIcons && (
          <Box
            className="donate-icon--upper"
            position={"absolute"}
            left="0"
            top="0"
            px={{ initial: "9.5px", sm: "12.5px", md: "18.5px" }}
            py={{ initial: "19.5px", sm: "26px", md: "36px" }}
            style={{ background: "var(--green-9)", borderRadius: "999px" }}
          >
            <Text
              size={{ initial: "2", sm: "3", md: "5" }}
              align="center"
              weight="medium"
            >
              Donate
            </Text>
          </Box>
        )}
        <Flex
          pt="7"
          pb={{ initial: "32px", md: "42px" }}
          gap="24px"
          direction={{
            initial: !imageRight ? "column-reverse" : "column",
            md: !imageRight ? "row-reverse" : "row",
          }}
          justify="between"
          align="center"
        >
          <Box flexBasis={{ initial: "100%", md: "50%" }}>
            <Box mb="20px" asChild>
              <Heading
                as="h2"
                size={{ initial: "7", md: "8" }}
                weight="bold"
                className={`${headingColor || "text-gray-400"}`}
                align={{ initial: "center", sm: "left" }}
              >
                {heading || "What YOU can do!"}
              </Heading>
            </Box>
            {text && (
              <Text
                as="div"
                size="3"
                className={`${textColor || "text-gray-400"}`}
                align={{ initial: "center", sm: "left" }}
              >
                <MarkdownContent content={text} />
              </Text>
            )}
            <Box
              mt="27px"
              mx={{ initial: "auto", md: "0" }}
              width={"100%"}
              maxWidth={"400px"}
              py="10px"
              height={"auto"}
              display={"block"}
              asChild
            >
              <Button
                className={`${buttonClasses} font-normal`}
                size="3"
                asChild
              >
                <Link
                  href={link || ""}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  {buttonText || "Donate now"}
                </Link>
              </Button>
            </Box>
          </Box>
          {image && (
            <>
              <Box flexBasis={{ initial: "100%", md: "50%" }} width={"100%"}>
                <Image
                  src={
                    image || "/images/donate/ukraine-response-gallery-02.png"
                  }
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
        {showDonateIcons && (
          <Box
            className="donate-icon--lower"
            display={{ initial: "none", sm: "block" }}
            position={"absolute"}
            right="0"
            bottom="0"
            px={{ initial: "9.5px", sm: "12.5px", md: "18.5px" }}
            py={{ initial: "19.5px", sm: "26px", md: "36px" }}
            style={{
              background: "var(--green-9)",
              borderRadius: "999px",
              transform: "translate(35%, 35%)",
            }}
          >
            <Text
              size={{ initial: "3", md: "5" }}
              align="center"
              weight="medium"
            >
              Donate
            </Text>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ImageTextCTA;
