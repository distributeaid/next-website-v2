import { Flex, Heading, Text, Container } from "@radix-ui/themes";
const IntroSection = () => {
  const introText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue  tempus aliquam. Suspendisse molestie nisl sit amet dui cursus placerat.  Sed lacinia pulvinar ligula, non pellentesque risus dapibus eget. Proin  porta efficitur risus. Aliquam eget maximus elit, nec sodales dui.  Curabitur venenatis congue arcu eget luctus. Vestibulum ante ipsum  primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean et sollicitudin tortor, ac auctor ligula. Mauris eget nunc vestibulum,  ullamcorper libero vitae, cursus turpis. Etiam vulputate libero vitae  diam blandit, id porta nisi consequat. Maecenas sed lobortis quam.  Pellentesque lobortis erat eros, pellentesque feugiat mi sodales et.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et  malesuada fames ac ante ipsum primis in faucibus. Nunc id erat  efficitur, facilisis est vitae, consequat mi. Donec at leo nibh.";
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
