import {
  Flex,
  Heading,
  Separator,
  Box,
  Container,
  Text,
} from "@radix-ui/themes";
import { Fund } from "@/types/fund";

interface HeroSectionProps {
  fund: Fund;
}

const DoneColumns = ({ fund }: HeroSectionProps) => {
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
          <Heading
            mb="20px"
            as="h2"
            size={{ initial: "7", sm: "8", md: "9" }}
            weight="bold"
            color="blue"
            highContrast
            className="lg:max-w-[90%]"
          >
            What We've Done
          </Heading>
          {done_column_left && <Text size="3">{done_column_left}</Text>}
        </Box>
        {done_column_right && (
          <>
            <Separator
              orientation={{ initial: "horizontal", md: "vertical" }}
              color="blue"
              size="4"
              className="max-lg:h-[0.6px] lg:w-[0.6px] lg:min-h-[200px]"
            />
            <Box flexBasis={{ initial: "100%", md: "50%" }}>
              <Text
                size="3"
                dangerouslySetInnerHTML={{ __html: done_column_right }}
              />
            </Box>
          </>
        )}
      </Flex>
    </Container>
  );
};

export default DoneColumns;
