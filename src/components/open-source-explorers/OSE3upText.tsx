import {
  Grid,
  Heading,
  Box,
  Container,
  Text,
} from "@radix-ui/themes";
import SmartLink from "../link/SmartLink";
import OSEColumn from "./OSEColumn";

const OSE3upText = () => {
  return (
    <Container
      pt="80px"
      px="4"
      size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
      align="center"
    >
      <Box mb="40px">
        <Heading
          as="h2"
          size={{ initial: "7", sm: "8", md: "9" }}
          align="center"
          weight="medium"
          color="blue"
          mb="12px"
          highContrast
        >
          What is Open Source Explorers
        </Heading>
        <Text as="p" size="6" align="center">
          Open Source Explorers is a 12-week program and split into three phases:
        </Text>
      </Box>
      <Grid columns="3">
        <OSEColumn />
        <OSEColumn />
        <OSEColumn />
      </Grid>
      <Box mb="20px">
        <Heading
          as="h3"
          size={{ initial: "7", sm: "8" }}
          align={{ initial: "center", sm: "left" }}
          weight="medium"
          color="blue"
          mb="12px"
          highContrast
        >
          Learn About OSS
        </Heading>
        <Text as="p" size="6" align={{ initial: "center", sm: "left" }}>
          Our participants <strong>gain valuable experience working on production code</strong> with a globally distributed team. They learn the importance of good communication and collaboration in open source and work on projects that look good on their CV, growing their skills. Their contributions are also reflected on their GitHub profiles and other tangible ways.
        </Text>
      </Box>
      <Box>
        <Heading
          as="h3"
          size={{ initial: "7", sm: "8" }}
          align={{ initial: "center", sm: "left" }}
          weight="medium"
          color="blue"
          mb="12px"
          highContrast
        >
          Join An Upcoming Cohort
        </Heading>
        <Text as="p" size="6" align={{ initial: "center", sm: "left" }}>
          We ran our first cohort at the beginning of 2024. Since then, we’ve been reorganising our tech team, preparing to run the next cohort and integrating contributors into our team.
        </Text>
        <Text as="p" size="6" align={{ initial: "center", sm: "left" }}>
          <SmartLink href="/" className="underline">Sign up</SmartLink> for our mailing list and we’ll let you know when we open applications for the next cohort.
        </Text>
      </Box>
    </Container>
  );
};

export default OSE3upText;