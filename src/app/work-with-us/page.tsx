import type { Metadata } from "next";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import { values } from "@/data/opportunities";
import { getRecruitingRoles } from "@/utils/strapi/api";
import type { RecruitingRole } from "@/utils/strapi/types";

export const metadata: Metadata = {
  title: "Work with us · Distribute Aid",
  description:
    "Our mission is to provide for basic human needs at scale by connecting communities and empowering people to uphold human dignity.",
};

export default async function OpportunitiesPage() {
  let roles: RecruitingRole[] = [];
  let error = false;

  try {
    roles = await getRecruitingRoles();
  } catch (err) {
    console.error("Failed to fetch recruiting roles", err);
    error = true;
  }

  return (
    <main id="main-content" className="mb-12">
      <Section className="bg-navy-900" size="1">
        <Container px="4">
          <Heading
            as="h1"
            size={{ initial: "8", sm: "9" }}
            weight="bold"
            align="center"
            className="text-white"
          >
            Work with us
          </Heading>
        </Container>
      </Section>
      <Section size="2">
        <Container px="4">
          <Box
            className="mx-auto max-w-3xl space-y-4 text-center text-lg text-navy-800"
            mb="4"
          >
            <p>
              <strong>Our mission</strong> is to provide for basic human needs
              at scale by connecting communities and empowering people to uphold
              human dignity.
            </p>
            <p>
              <strong>Our approach</strong> is to build open-access physical and
              digital infrastructure that any humanitarian aid org can use. We
              are a highly collaborative &amp; transparent organization that
              helps our partners grow their own efforts by sharing information,
              resources, and decision making.
            </p>
            <p>
              <strong>Our impact</strong> has led to a 2.5x efficiency gain
              across our supply chain by increasing coordination, reducing
              costs, saving volunteer time, and preventing waste. On average,
              every €1 we spend delivers €20 worth of aid to our local partners.
            </p>
          </Box>
          <Flex justify="center" mb="8">
            <Link
              href="/team"
              className="text-navy-700 underline underline-offset-4"
            >
              Meet the team
            </Link>
          </Flex>
          <section aria-labelledby="roles-heading">
            <Heading
              id="roles-heading"
              as="h2"
              size="7"
              align="center"
              className="text-navy-800"
              mb="4"
            >
              Explore our roles
            </Heading>
            {error ? (
              <Text as="p" align="center" className="text-gray-700">
                We couldn’t load our roles right now. Please try again later.
              </Text>
            ) : roles.length === 0 ? (
              <Text as="p" align="center" className="text-gray-700">
                There are no open roles at the moment. Please check back soon.
              </Text>
            ) : (
              <ul className="divide-y divide-gray-200 border-y border-gray-200">
                {roles.map((role) => (
                  <li key={role.documentId}>
                    <Heading
                      as="h3"
                      size={{ initial: "5", sm: "6" }}
                      className="text-navy-800"
                    >
                      <Link
                        href={`/work-with-us/${role.slug}`}
                        className="block py-6 hover:underline"
                      >
                        {role.title}
                      </Link>
                    </Heading>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </Container>
      </Section>
      <Section className="bg-navy-100" size="2">
        <Container px="4">
          <section id="values" aria-labelledby="values-heading">
            <Heading
              id="values-heading"
              as="h2"
              size={{ initial: "8", sm: "9" }}
              weight="bold"
              align="center"
              className="text-navy-700"
              mb="4"
            >
              Our values
            </Heading>
            <Grid columns={{ initial: "1", sm: "2", lg: "3" }} gap="6">
              {values.map((value) => (
                <Box key={value.title}>
                  <Heading as="h3" size="5" mb="3" className="text-navy-800">
                    {value.title}
                  </Heading>
                  <Text as="p" className="text-gray-700">
                    {value.description}
                  </Text>
                </Box>
              ))}
            </Grid>
            <Flex justify="center" mt="8">
              <Button
                asChild
                className="bg-navy-700 text-white hover:bg-navy-800"
                size="3"
              >
                <Link href="/code-of-conduct">Read our Code of Conduct</Link>
              </Button>
            </Flex>
          </section>
        </Container>
      </Section>
    </main>
  );
}
