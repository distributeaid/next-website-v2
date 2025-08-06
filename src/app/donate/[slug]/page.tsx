import { notFound } from "next/navigation";
import { Fund } from "@/types/fund";
import { Route } from "@/types/route";
import FUND_RAISERS from "@/data/donate.json";
import FundHero from "@/components/donate/fund/FundHero";
import DoneColumns from "@/components/donate/fund/DoneColumns";
import ImageGallery from "@/components/donate/fund/ImageGallery";
import ImageTextCTA from "@/components/cta/ImageTextCTA";
import DonationCTA from "@/components/donate/fund/DonationCTA";

export async function generateStaticParams() {
  return FUND_RAISERS.map((fundRoute: Fund) => ({
    slug: fundRoute.slug,
  }));
}

const DonateDetails = async ({ params }: Route) => {
  const { slug } = await params;

  const route = FUND_RAISERS.find((fund: Fund) => fund.slug === slug);

  if (!route) {
    notFound();
  }

  return (
    <>
      <FundHero fund={route} />
      <DoneColumns fund={route} />
      <ImageGallery fund={route} />
      <ImageTextCTA
        image={route.do_CTA_image}
        text={route.do_CTA_text}
        link={route.donate_link}
        showDonateIcons={true}
        buttonClasses="bg-navy-600 hover:bg-navy-500"
      />
      <DonationCTA />
    </>
  );
};

export default DonateDetails;
