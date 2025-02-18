import { notFound } from "next/navigation";
import { Fund } from "@/types/fund";
import { Route } from "@/types/route";
import FUND_RAISERS from "@/data/donate.json";
import FundHero from "@/components/donate/fund/FundHero";

export async function generateStaticParams() {
  return FUND_RAISERS.map((fundRoute: Fund) => ({
    slug: fundRoute.slug,
  }));
}

const DonateDetails = ({ params }: Route) => {
  const { slug } = params;

  const route = FUND_RAISERS.find((fund: Fund) => fund.slug === slug);

  if (!route) {
    notFound();
  }

  return (
    <>
      <FundHero fund={route} />
    </>
  );
};

export default DonateDetails;
