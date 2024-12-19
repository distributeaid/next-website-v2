import { FC } from "react";
import { Grid, Box, Container, Flex, Heading, Section } from "@radix-ui/themes";

const DonateHero = () => {
  return (
    <>
      <Section
        className="bg-[#1D2F73]"
        style={{
          boxShadow: "0px 4px 4px 0px #00000040",
        }}
      >
        <Container px="4" py="0">
          <Heading
            as="h1"
            weight="regular"
            size="9"
            highContrast
            className="text-white max-w-[553px]"
            style={{
              textShadow: "0px 4px 4px #051E5DB2",
            }}
          >
            Support us today, so communities are prepared for tomorrow
          </Heading>
        </Container>
      </Section>
      <Section
        py="0"
        style={{
          background: "#FFFFFF",
        }}
      >
        <Container px="4" py="0">
          <Grid gap="0" columns={{ md: "2" }}>
            <Box
              style={{
                background: "#DFCDE8",
                borderRadius: "0 0 0 32px",
              }}
              p="7"
            >
              <Heading as="h2" className="text-navy-900">
                Ship aid to people in need.
              </Heading>
              <Flex>{/* Donate Buttons Here */}</Flex>
            </Box>
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default DonateHero;
