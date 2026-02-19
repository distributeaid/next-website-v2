import DonateGrid from "@/components/donate/DonateGrid";
import FUND_RAISERS from "@/data/donate.json";
import CopySection from "@/components/donate/CopySection";
import DonateLandingText from "@/components/donate/DonateLandingText";
import WingOfHonor from "@/components/donate/WingOfHonor";
import HeroSection from "@/components/ui/HeroSection";

const Page = () => {
  return (
    <>
      <HeroSection
        heading="Support us today, so communities are prepared for
              tomorrow."
        imgSrc="/images/photos/photo-ukr-donation-03.jpg"
        imgAlt="Refugee Relief"
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
