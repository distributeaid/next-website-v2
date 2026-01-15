import Image from "next/image";
import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
  Section,
} from "@radix-ui/themes";

import { cardContent, type MapKey } from "../../data/home/whereWeWork";

import { SectionHeading } from "../ui/SectionWithTitle";

const WhereWeWork = () => {
  const mapKey: MapKey[] = [
    {
      label: "Receiving Aid",
      color: "bg-key-dark-blue",
    },
    {
      label: "Sending Aid",
      color: "bg-key-light-blue",
    },
    {
      label: "Both",
      color: "bg-key-green",
    },
  ];

  const headingId = "where-we-work-section-title";

  return (
    <Section className="bg-slate-100 p-12" aria-labelledby={headingId}>
      <Box mb="9">
        <SectionHeading id={headingId}>Where We Work</SectionHeading>
        <Flex gap="6" justify="center" mt="5" asChild>
          <ul>
            {mapKey.map(({ label, color }) => (
              <li key={label}>
                <Flex gap="3">
                  <Box className={`size-8 rounded-full ${color}`} />
                  <Text size="6">{label}</Text>
                </Flex>
              </li>
            ))}
          </ul>
        </Flex>
      </Box>
      <Grid
        columns={{
          initial: "1",
          md: "3",
        }}
        gap="7"
        maxWidth={{ initial: "1242px" }}
        mx="auto"
      >
        {cardContent.map(({ map, title, summary, alt }) => {
          const id = `region-heading-${title.toLowerCase().replaceAll(" ", "-")}`;

          return (
            <Card key={title}>
              <Box m="4" asChild>
                <article aria-labelledby={id}>
                  <Flex
                    height={{ md: "191px" }}
                    width={{ initial: "100%", md: "auto" }}
                    justify="center"
                    mb="4"
                  >
                    <Image src={map} alt={alt} className="w-full" />
                  </Flex>
                  <Heading
                    id={id}
                    as="h3"
                    size={{
                      initial: "7",
                      md: "8",
                    }}
                    weight="medium"
                    mb="4"
                  >
                    {title}
                  </Heading>
                  <Text>{summary}</Text>
                </article>
              </Box>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
};

export default WhereWeWork;
