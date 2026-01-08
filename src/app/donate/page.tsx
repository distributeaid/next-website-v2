import DonateGrid from "@/components/donate/DonateGrid";
import FUND_RAISERS from "@/data/donate.json";
// import HeroSection from "@/components/donate/HeroSection";
import CopySection from "@/components/donate/CopySection";
import DonateLandingText from "@/components/donate/DonateLandingText";
import WingOfHonor from "@/components/donate/WingOfHonor";
import HeroSection from "@/components/ui/HeroSection";

const Page = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <HeroSection
        heading="Support us today, so communities are prepared for
              tomorrow."
        imgSrc="/images/donate/european-refugee-relief-hero-tinted.png"
        imgAlt="european-refugee-relief-hero-tinted"
        buttonHeading="Ship aid to people in need."
        buttonBGColor="var(--green-9)"
        hasLogo={false}
      />
      <CopySection />
      {FUND_RAISERS && FUND_RAISERS.length > 0 && (
        <DonateGrid funds={FUND_RAISERS} />
      )}
      <DonateLandingText />
      <WingOfHonor />
    </>
  );
};

export default Page;
