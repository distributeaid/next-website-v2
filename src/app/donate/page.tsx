import Card from "@/components/donate/Card";
import Header from "@/components/donate/Header";
import { FUND_RAISERS } from "@/data/donate";
import Image from "next/image";
import { Lato } from "next/font/google";
import { DIRECTION } from "@/data/constants";
import ShipAid from "@/components/donate/ShipAid";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const Page = () => {
  return (
    <div className={lato.className}>
      <div className="px-4 py-8 bg-navy-100 flex justify-center">
        <Header />
      </div>

      <div className="max-w-screen-lg mx-auto duration-400 min-h-screen/3 sm:grid grid-cols-2 items-center">
        {FUND_RAISERS.map((donate, i) =>
          donate.img ? (
            <a href={donate.img_link} target="_blank" key={i}>
              <Image
                src={donate.img}
                alt={donate.img}
                width={512}
                height={426}
                className="w-full h-[192px] sm:h-[426px] object-cover"
              />
            </a>
          ) : (
            <div className="py-4 px-2" key={i}>
              <Card
                title={donate.title!}
                percentage={donate.percentage!}
                goal_price={donate.goal_price!}
                donate_link={donate.donate_link!}
                more_link={donate.more_link!}
                position={i % 2 === 1 ? DIRECTION.LEFT : DIRECTION.RIGHT}
              />
            </div>
          ),
        )}
      </div>
      <ShipAid />
    </div>
  );
};

export default Page;
