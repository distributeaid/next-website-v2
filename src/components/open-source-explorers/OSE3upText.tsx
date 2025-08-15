import { Grid, Heading, Box, Container, Text } from "@radix-ui/themes";
import OSEColumn from "./OSEColumn";

const OSE3upText = () => {
  return (
    <Container
      pt={{ initial: "60px", sm: "76px", md: "80px" }}
      px="4"
      pb="60px"
      size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
      align="center"
    >
      <Box mb="40px" mx="auto" width={{ initial: "95%", sm: "100%" }}>
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
        <Text as="p" size={{ initial: "5", sm: "6" }} align="center">
          Open Source Explorers is a 12-week program and split into three
          phases:
        </Text>
      </Box>
      <Grid
        columns={{ initial: "1", sm: "3" }}
        gapX="4"
        mb={{ initial: "5", sm: "0" }}
      >
        <OSEColumn
          circleText={"Week \n\n 1–4"}
          circleColorClass="bg-circle-blue"
          circleTextColorClass="text-circle-white"
          content="Participants are introduced to the OSS ecosystem, its etiquette and infrastructure in sessions with Distribute Aid maintainers and external guest speakers."
        />
        <OSEColumn
          circleText={"Week \n\n 5–8"}
          circleColorClass="bg-circle-pink"
          content="Participants integrate into the existing contributor team with guidance from mentors and attend their first monthly sprint meeting."
        />
        <OSEColumn
          circleText={"Week \n\n 9–12"}
          circleColorClass="bg-circle-green"
          content="Participants become more self-sufficient, switching from mentor support to peer-to-peer support, picking up issues and collaborating in tech hangs."
        />
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
        <Text
          as="p"
          size={{ initial: "5", sm: "6" }}
          align={{ initial: "center", sm: "left" }}
        >
          Our participants{" "}
          <strong>gain valuable experience working on production code</strong>{" "}
          with a globally distributed team. They learn the importance of good
          communication and collaboration in open source and work on projects
          that look good on their CV, growing their skills. Their contributions
          are also reflected on their GitHub profiles and other tangible ways.
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
        <Text
          as="p"
          size={{ initial: "5", sm: "6" }}
          align={{ initial: "center", sm: "left" }}
        >
          We ran our first cohort at the beginning of 2024. Since then, we’ve
          been reorganising our tech team, preparing to run the next cohort and
          integrating contributors into our team.
        </Text>
        {/* TODO: Add Beehive integration to sign up link 
          <Text
          as="p"
          size={{ initial: "5", sm: "6" }}
          align={{ initial: "center", sm: "left" }}
          mt="1em"
        >
          <SmartLink href="/" className="underline">
            Sign up
          </SmartLink>{" "}
          for our mailing list and we’ll let you know when we open applications
          for the next cohort.
        </Text> */}
      </Box>
    </Container>
  );
};

export default OSE3upText;
