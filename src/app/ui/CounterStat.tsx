"use client";
import crate from "../../../public/images/da-in-numbers/crate.svg";
import handsParcel from "../../../public/images/da-in-numbers/hands-parcel.svg";
import handsPluses from "../../../public/images/da-in-numbers/hands-pluses.svg";
import handsShaking from "../../../public/images/da-in-numbers/hands-shaking.svg";
import pallet from "../../../public/images/da-in-numbers/pallet.svg";
import route from "../../../public/images/da-in-numbers/route.svg";
import Image from "next/image";
import CountUp from "react-countup";
import { lato } from "../ui/fonts";

const Icon = ({ srcImg }: { srcImg: string }) => {
  return <Image src={srcImg} alt="" className="size-28" />;
};

const Counter = ({
  unitStart,
  unitEnd,
  stat,
  title,
}: {
  unitStart?: string;
  unitEnd?: string;
  stat: number;
  title: string;
}) => {
  return (
    <div
      className={`${lato.className} antialiased flex flex-col justify-center items-center mt-4`}
    >
      <p className="text-2xl">
        <span>{unitStart}</span>
        <CountUp duration={10} className="counter" end={stat} />
        <span> {unitEnd}</span>
      </p>
      <span className="text-primary opacity-80">{title}</span>
    </div>
  );
};

const CounterStat = () => {
  return (
    <section className="text-center px-72  py-28">
      <h2 className="text-4xl font-bold mb-4">
        July 2021 - June 2022 in numbers
      </h2>
      <p>
        Read more in our
        <a
          href="https://prezi.com/i/view/DzjydpaXoACQHRpcsXvJ"
          target="_blank"
          rel="noopener"
          className="text-primary font-bold"
        >
          {" "}
          latest annual report.
        </a>
      </p>
      <div className="flex justify-evenly items-baseline pt-24">
        <div className="flex flex-col justify-center items-center">
          <Icon srcImg={crate} />
          <Counter stat={32} title="shipments" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Icon srcImg={handsParcel} />
          <Counter stat={1117000} title="needs met" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Icon srcImg={handsPluses} />
          <Counter
            stat={6124150}
            title="value to end-beneficiary"
            unitStart="€"
          />
          <Counter
            stat={14730500}
            title="retail value (based on USA GDP)"
            unitStart="$"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Icon srcImg={route} />
          <Counter stat={96500} title="traveled" unitEnd="km" />
          <Counter stat={202000} title="shipped" unitEnd="kg" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Icon srcImg={pallet} />
          <Counter stat={4400000} title="items shipped" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Icon srcImg={handsShaking} />
          <Counter stat={142} title="organizations worked with" />
          <Counter stat={40} title="active team members" />
        </div>
      </div>
    </section>
  );
};

export default CounterStat;
