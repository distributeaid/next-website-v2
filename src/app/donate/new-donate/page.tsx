import CampaignCard from "@/components/donate/CampaignCard";
import { FUND_RAISERS } from "@/data/donate";

const Page = () => {
  return (
    <div>
      {FUND_RAISERS.map((donate, i) =>
        <CampaignCard
          key={i}
          imgSrc={donate.img || "/images/donate/european-refugee-relief-hero.webp"}
          imgAlt="Alt"
          title={donate.title || "Untitled Campaign" }
          raised={donate.percentage ?? 0}
          goal={donate.goal_price ?? 0}
          donateLink={donate.donate_link || "#"}
          moreLink={donate.more_link || "#"}
        />
      )}
    </div>
  );
};

export default Page;
