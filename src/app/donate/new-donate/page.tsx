import CampaignCard from "@/components/donate/CampaignCard";
import { Container, Grid } from "@radix-ui/themes";
import { FUND_RAISERS } from "@/data/donate";

const Page = () => {
  return (
    <Container px="4">
      <Grid gap="8" columns={{ xs: "2", md: "3" }} pt="4.5rem" pb="9rem">
        {FUND_RAISERS &&
          FUND_RAISERS.length > 0 &&
          FUND_RAISERS.map((donate, i) => (
            <CampaignCard
              key={i}
              imgSrc={donate.img}
              imgAlt=""
              title={donate.title}
              raised={donate.percentage}
              goal={donate.goal_price}
              donateLink={donate.donate_link}
              moreLink={donate.more_link}
            />
          ))}
      </Grid>
    </Container>
  );
};

export default Page;
