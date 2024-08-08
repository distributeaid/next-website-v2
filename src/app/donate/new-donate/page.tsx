import CampaignCard from "@/components/donate/CampaignCard";

const Page = () => {
  return (
    <CampaignCard
      imgSrc="/images/donate/european-refugee-relief-hero.webp"
      imgAlt="Alt"
      title="Ukraine Response Project"
      raised={2000.0}
      goal={4000.0}
      donateLink="https://www.omprakash.org/global/distribute-aid/donate"
    />
  );
};

export default Page;
