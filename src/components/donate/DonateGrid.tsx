import { FC } from "react";
import CampaignCard from "@/components/donate/CampaignCard";
import { Grid, Container } from "@radix-ui/themes";
import { Fund } from "@/types/fund";

const DonateGrid: FC<{
  funds: Fund[];
}> = ({ funds }) => {
  return (
    <Container px="4">
      <Grid gap="8" columns={{ sm: "2", md: "3" }} pt="4.5rem" pb="9rem">
        {funds.map((fund, i) => (
          <CampaignCard
            key={i}
            imgSrc={fund.img}
            imgAlt=""
            title={fund.title}
            raised={fund.percentage}
            goal={fund.goal_price}
            donateLink={fund.donate_link}
            moreLink={fund.more_link}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default DonateGrid;
