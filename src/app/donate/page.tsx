import DonateGrid from "@/components/donate/DonateGrid";
import { FUND_RAISERS } from "@/data/donate";
import HeroSection from "@/components/donate/HeroSection";
import DonateLandingText from "@/components/donate/DonateLandingText";

const Page = () => {
  return (
    <>
      <HeroSection />
      {FUND_RAISERS && FUND_RAISERS.length > 0 && (
        <DonateGrid funds={FUND_RAISERS} />
      )}
      <DonateLandingText />
    </>
  );
};

export default Page;
