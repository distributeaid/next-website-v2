import DonateGrid from "@/components/donate/DonateGrid";
import CopySection from "@/components/donate/CopySection";
import DonateLandingText from "@/components/donate/DonateLandingText";
import WingOfHonor from "@/components/donate/WingOfHonor";
import HeroSection from "@/components/ui/HeroSection";
import { getFundraisers } from "@/utils/strapi/api";
import type { Fundraiser } from "@/utils/strapi/types";

const Page = async () => {
  let fundraisers: Fundraiser[] = [];
  let error = false;

  try {
    fundraisers = await getFundraisers();
  } catch (err) {
    console.error("Failed to fetch fundraisers", err);
    error = true;
  }

  return (
    <>
      <HeroSection
        heading="Support us today, so communities are prepared for
              tomorrow."
        imgSrc="/images/photos/photo-all-we-have.jpg"
        imgAlt="All We Have"
        buttonHeading="Ship aid to people in need."
        buttonBGColor="var(--green-9)"
        hasLogo={false}
      />
      <CopySection />
      <DonateGrid funds={fundraisers} error={error} />
      <DonateLandingText />
      <WingOfHonor />
    </>
  );
};

export default Page;
