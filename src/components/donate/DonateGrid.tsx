import { FC } from "react";
import CampaignCard from "@/components/donate/CampaignCard";
import { Grid, Box, Container, Heading, Flex } from "@radix-ui/themes";
import { Fund } from "@/types/fund";
import { FaArrowDown } from "react-icons/fa";

const DonateGrid: FC<{
  funds: Fund[];
}> = ({ funds }) => {
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

      <Grid gap="8" columns={{ sm: "2", md: "3" }} pt="4.5rem" pb="9rem">
        {funds.map((fund, i) => (
          <Box key={i} width="100%" mx="auto" asChild>
            <CampaignCard
              imgSrc={fund.img}
              imgAlt=""
              title={fund.title}
              raised={fund.percentage}
              goal={fund.goal_price}
              donateLink={fund.donate_link}
              moreLink={fund.more_link}
            />
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default DonateGrid;
