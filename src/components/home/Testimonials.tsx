import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

import { partnerTestimonials } from "@/data/home/partnerTestimonials";

const Testimonials = () => {
  return (
    <Box p="7" aria-labelledby="testimonial-heading">
      <Flex direction="column" align="center" mb="8">
        <Heading
          as="h2"
          className="text-navy-900 text-6xl"
          m="4"
          id="testimonial-heading"
        >
          Partner Testimonials
        </Heading>
        <Text size="4" m="4">
          Insights from organizations working alongside us
        </Text>
      </Flex>
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
    </Box>
  );
};

export default Testimonials;
