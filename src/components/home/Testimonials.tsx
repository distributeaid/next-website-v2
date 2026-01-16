import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";

import { partnerTestimonials } from "@/data/testimonials";

import Section from "../ui/SectionWithTitle";

const Testimonials = () => {
  return (
    <Section
      title="Partner Testimonials"
      subTitle="Insights from organizations working alongside us"
    >
      <Grid
        columns={{
          initial: "1",
          lg: "2",
        }}
        gap="7"
        asChild
      >
        <ul>
          {partnerTestimonials.map(({ name, role, quote, img }, index) => (
            <Box
              key={`${index}-${name}}`}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-8"
              asChild
            >
              <li>
                <Flex direction="column" gap="5" asChild>
                  <article aria-labelledby={`t-${index}-name`}>
                    <Flex gap="4" align="center">
                      {img && (
                        <Image
                          className="rounded-lg"
                          src={`/images/home/partner-testimonials/${img.src}`}
                          alt={img.alt}
                          loading="lazy"
                          width={112}
                          height={112}
                        />
                      )}
                      <Flex direction="column" gap="2">
                        <Text className="text-2xl" id={`t-${index}-name`}>
                          {name}
                        </Text>
                        <Text className="text-lg">{role}</Text>
                      </Flex>
                    </Flex>
                    <blockquote className="font-bold italic text-2xl">
                      "{quote}"
                    </blockquote>
                  </article>
                </Flex>
              </li>
            </Box>
          ))}
        </ul>
      </Grid>
    </Section>
  );
};

export default Testimonials;
