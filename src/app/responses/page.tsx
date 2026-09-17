import { Container, Grid, Heading, Section, Text } from "@radix-ui/themes";

import { ResponseCard } from "@/components/responses/ResponseCard";
import { getResponseOverviews } from "@/utils/strapi/api";

export default async function ResponsesOverviewPage() {
  const responses = await getResponseOverviews();

  return (
    <main id="main-content">
      <Section className="bg-navy-900" size="1">
        <Container>
          <Heading
            as="h1"
            size="9"
            weight="bold"
            align="center"
            className="text-white"
          >
            Responses
          </Heading>
        </Container>
      </Section>
      <Section size="2">
        <Container>
          <Text as="p" size="5" align="center" className="text-navy-800" mb="6">
            Explore Distribute Aid&apos;s active humanitarian responses around
            the world.
          </Text>
          {responses.length > 0 ? (
            <Grid
              columns={{ initial: "1", sm: "2", lg: "3" }}
              gap="5"
              width="100%"
            >
              {responses.map((response) => (
                <ResponseCard key={response.id} response={response} />
              ))}
            </Grid>
          ) : (
            <Text as="p" size="4" align="center" className="text-navy-800">
              No responses are currently available.
            </Text>
          )}
        </Container>
      </Section>
    </main>
  );
}
