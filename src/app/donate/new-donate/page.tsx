import DonateGrid from "@/components/donate/DonateGrid";
import { FUND_RAISERS } from "@/data/donate";

const Page = () => {
  return (
    <>
      {FUND_RAISERS && FUND_RAISERS.length > 0 && (
        <DonateGrid funds={FUND_RAISERS} />
      )}
    </>
  );
};

export default Page;
