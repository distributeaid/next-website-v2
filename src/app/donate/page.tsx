import DonateGrid from "@/components/donate/DonateGrid";
import FUND_RAISERS from "@/data/donate.json";
import HeroSection from "@/components/donate/HeroSection";
import CopySection from "@/components/donate/CopySection";
import DonateLandingText from "@/components/donate/DonateLandingText";

const Page = () => {
  return (
    <>
      <HeroSection />
      <CopySection />
      {FUND_RAISERS && FUND_RAISERS.length > 0 && (
        <DonateGrid funds={FUND_RAISERS} />
      )}
      <DonateLandingText />
    </>
  );
};

export default Page;
