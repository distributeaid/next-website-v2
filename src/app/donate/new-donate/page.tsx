import CampaignCard from "@/components/donate/CampaignCard";
import { FUND_RAISERS } from "@/data/donate";

const Page = () => {
  return (
    <div>
      {FUND_RAISERS.map((donate, i) => (
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
    </div>
  );
};

export default Page;
