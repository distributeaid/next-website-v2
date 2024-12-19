import DonateGrid from "@/components/donate/DonateGrid";
import DonateHero from "@/components/donate/DonateHero";
import { FUND_RAISERS } from "@/data/donate";

const Page = () => {
  return (
    <>
      <DonateHero />
      {FUND_RAISERS && FUND_RAISERS.length > 0 && (
        <DonateGrid funds={FUND_RAISERS} />
      )}
    </>
  );
};

export default Page;
