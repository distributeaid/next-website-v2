import { notFound } from "next/navigation";
import { Fund } from "@/types/fund";
import { Route } from "@/types/route";
import FUND_RAISERS from "@/data/donate.json";
import FundHero from "@/components/donate/fund/FundHero";
import DoneColumns from "@/components/donate/fund/DoneColumns";
import ImageGallery from "@/components/donate/fund/ImageGallery";
import YouDoCTA from "@/components/donate/fund/YouDoCTA";

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
      <YouDoCTA fund={route} />
    </>
  );
};

export default DonateDetails;
