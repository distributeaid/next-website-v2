import { Box, Container, Heading, Grid, Text, Flex } from "@radix-ui/themes";
import Link from "next/link";
import OSECircle from "./OSECircle";

const Timeline = () => {
  const timeline: { step: number; colorClass: string; caption: string }[] = [
    {
      step: 1,
      colorClass: "bg-circle-blue",
      caption:
        "Applications open: We provide an application form for you to fill out.",
    },
    {
      step: 2,
      colorClass: "bg-circle-pink",
      caption: "Preselection of candidates by core team and mentors.",
    },
    {
      step: 3,
      colorClass: "bg-circle-gray",
      caption: "Maintainer team interviews most suitable candidates.",
    },
    {
      step: 4,
      colorClass: "bg-circle-green",
      caption: "Final selection and invitations to join the program.",
    },
    {
      step: 5,
      colorClass: "bg-circle-blue",
      caption:
        "Signing the volunteer agreement and onboarding to various tools.",
    },
    {
      step: 6,
      colorClass: "bg-circle-pink",
      caption: "The next Open Source Explorers cohort starts!",
    },
  ];

  return (
    <Container
      pt={{ initial: "60px", sm: "76px", md: "80px" }}
      px="4"
      pb="60px"
      size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
      align="center"
    >
      <Flex direction="column" gap="7">
        <Box
          style={{
            textAlign: "center",
          }}
        >
          <Heading
            as="h2"
            size={{ initial: "7", sm: "8", md: "9" }}
            weight="medium"
            color="blue"
            mb="12px"
            highContrast
          >
            Application Timeline
          </Heading>
          <Text as="p" size={{ initial: "5", sm: "6" }}>
            We don’t currently have a start date for our next cohort but you can{" "}
            <Link href="">sign up to our OSE mailing list</Link> where we will
            announce new cohorts.
          </Text>
        </Box>
        <Grid
          columns={{
            initial: "1",
            sm: "2",
            md: "3",
          }}
          gapX="4"
          gapY="6"
          mx="auto"
        >
          {timeline.map(({ step, colorClass, caption }) => (
            <Flex
              key={`step-${step}`}
              direction="column"
              align="center"
              py="5"
              gap="4"
              maxWidth="323px"
            >
              <OSECircle
                text={`Step ${step}`}
                colorClass={colorClass}
                textColorClass={
                  colorClass === "bg-circle-blue" ? "text-white" : undefined
                }
              />
              <Text weight="bold" align="center">
                {caption}
              </Text>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Container>
  );
};

export default Timeline;
