import {
  Flex,
  Heading,
  Separator,
  Box,
  Container,
  Text,
} from "@radix-ui/themes";
import { FundProps } from "@/types/fund";
import { MarkdownContent } from "@/components/markdown/MarkdownContent";

const DoneColumns = ({ fund }: FundProps) => {
  const { done_column_left, done_column_right } = fund;
  if (!done_column_left && !done_column_right) {
    return <></>;
  }
  return (
    <Container
      pb="24px"
      px="4"
      size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
      align="center"
    >
      <Flex
        pt="20px"
        pb="7"
        gap={{ initial: "24px", md: "108px" }}
        direction={{ initial: "column", md: "row" }}
        justify="between"
        align="center"
      >
        <Box flexBasis={{ initial: "100%", md: "50%" }}>
          <Box mb="20px" maxWidth={{ sm: "30%", md: "90%" }} asChild>
            <Heading
              as="h2"
              size={{ initial: "7", sm: "8", md: "9" }}
              align={{ initial: "center", sm: "left" }}
              weight="bold"
              color="blue"
              highContrast
            >
              What We’ve Done
            </Heading>
          </Box>
          {done_column_left && (
            <Text as="div" size="3" align={{ initial: "center", sm: "left" }}>
              <MarkdownContent content={done_column_left} />
            </Text>
          )}
        </Box>
        {done_column_right && (
          <>
            <Box
              minHeight={{ md: "200px" }}
              height={{ initial: "0.6px", lg: "auto" }}
              width={{ md: "0.6px" }}
              asChild
            >
              <Separator
                orientation={{ initial: "horizontal", md: "vertical" }}
                color="blue"
                size="4"
              />
            </Box>
            <Box flexBasis={{ initial: "100%", md: "50%" }}>
              <Text as="div" className="[&>ul]:pt-3" size="3">
                <MarkdownContent content={done_column_right} />
              </Text>
            </Box>
          </>
        )}
      </Flex>
    </Container>
  );
};

export default DoneColumns;
