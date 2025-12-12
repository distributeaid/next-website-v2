import { Flex, Heading, Text, Container } from "@radix-ui/themes";
const IntroSection = () => {
  const introText =
    "We’re a small, diverse, and international team. Our team members are highly-skilled volunteers and experienced community organisers serving their local communities. They actively choose to spend several hours a week putting their skillset to good use to help Distribute Aid to deliver more aid for less money and create impact far greater than our organisation’s size would imply.";
  return (
    <>
      <Container m={"3"}>
        <Flex align={"center"} gapY={"9"} direction={"column"}>
          <Heading
            className="underline decoration-2 underline-offset-[30px] uppercase"
            size={{ initial: "8", sm: "9" }}
            style={{ color: "var(--blue-header)" }}
            as="h1"
            align={"center"}
          >
            Distribute Aid Team
          </Heading>
          <Text
            weight={"bold"}
            style={{ color: "var(--blue-background)" }}
            align={"center"}
            as="p"
          >
            {introText}
          </Text>
        </Flex>
      </Container>
    </>
  );
};
export default IntroSection;
