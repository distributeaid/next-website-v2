import { FC } from "react";
import { Container, Grid, Heading, Section, Text } from "@radix-ui/themes";

import { responses } from "@/data/responses";
import { ResponseCard } from "@/components/responses/ResponseCard";

const ResponsesOverviewPage: FC = () => (
  <main>
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
          Explore Distribute Aid&apos;s active humanitarian responses around the
          world.
        </Text>
        <Grid columns={{ initial: "1", sm: "2", lg: "3" }} gap="5" width="100%">
          {responses.map((response) => (
            <ResponseCard key={response.url} response={response} />
          ))}
        </Grid>
      </Container>
    </Section>
  </main>
);

export default ResponsesOverviewPage;
