import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";

import { partnerTestimonials } from "@/data/home";

const Testimonials = () => {
  return (
    <Box p="7">
      <Box className="text-center" mb="8">
        <Heading as="h2" className="text-navy-900 text-6xl" m="4">
          Partner Testimonials
        </Heading>
        <Text size="4" m="4">
          Insights from organizations working alongside us.
        </Text>
      </Box>
      <Grid
        columns={{
          initial: "1",
          lg: "2",
        }}
        gap="7"
      >
        {partnerTestimonials.map(({ name, role, quote, img }) => (
          <Flex
            className="bg-slate-50 rounded-2xl border border-slate-200 p-8"
            key={name}
            direction="column"
            gap="5"
          >
            <Flex gap="4" align="center">
              <img
                className="rounded-lg"
                src={`/images/home/partner-testimonials/${img.src}`}
                alt={img.alt}
                loading="lazy"
                width={112}
                height={112}
              />
              <Flex direction="column" gap="2">
                <Text className="text-2xl">{name}</Text>
                <Text className="text-lg">{role}</Text>
              </Flex>
            </Flex>
            <Text className="font-bold italic text-2xl">"{quote}"</Text>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
