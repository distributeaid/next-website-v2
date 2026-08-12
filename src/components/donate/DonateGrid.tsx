import { FC } from "react";
import CampaignCard from "@/components/donate/CampaignCard";
import { Grid, Box, Container, Heading, Flex, Text } from "@radix-ui/themes";
import { Fundraiser } from "@/utils/strapi/types";
import siteSettings from "@/data/site-settings.json";
import { FaArrowDown } from "react-icons/fa";

const percentage = (n: number, d: number) => {
  if (!d) return 0;
  const percentage = (n / d) * 100;
  return Math.round(percentage * 10) / 10;
};

const DonateGrid: FC<{
  funds: Fundraiser[];
  error?: boolean;
}> = ({ funds, error = false }) => {
  const sortedFunds = [...funds].sort(
    (a, b) => Number(b.isFeatured) - Number(a.isFeatured),
  );

  return (
    <Container pt={"9"} px="4">
      <Flex gap={"4"} direction={"column"} align={"center"}>
        <Heading
          as="h1"
          weight="medium"
          size={{ initial: "8", sm: "9" }}
          className="text-navy-900 inline-flex gap-[15px]"
        >
          Donate Money <FaArrowDown />
        </Heading>
        <Heading
          as="h2"
          weight={"medium"}
          size={{ initial: "7", sm: "8" }}
          className="text-navy-900"
        >
          Campaigns
        </Heading>
      </Flex>

      {error ? (
        <Box pt="4.5rem" pb="9rem" asChild>
          <Text align="center" as="p" size="4" className="text-navy-900">
            We&apos;re unable to load campaigns right now. Please check back
            soon.
          </Text>
        </Box>
      ) : sortedFunds.length === 0 ? (
        <Box pt="4.5rem" pb="9rem" asChild>
          <Text align="center" as="p" size="4" className="text-navy-900">
            There are no active campaigns at the moment.
          </Text>
        </Box>
      ) : (
        <Grid gap="8" columns={{ sm: "2", md: "3" }} pt="4.5rem" pb="9rem">
          {sortedFunds.map((fund) => (
            <Box key={fund.id} width="100%" mx="auto" asChild>
              <CampaignCard
                imgSrc={fund.featuredImageURL ?? undefined}
                imgAlt={fund.title}
                title={fund.title}
                raised={percentage(
                  parseFloat(fund.amountRaised),
                  parseFloat(fund.goalTotal),
                )}
                goal={parseFloat(fund.goalTotal)}
                donateLink={fund.donateURL}
                isFeatured={fund.isFeatured}
              />
            </Box>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default DonateGrid;
