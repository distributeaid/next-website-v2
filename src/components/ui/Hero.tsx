import Image from "next/image";
import {
  logoHero,
  loadingTruck,
  moriaFireRelief,
  soapRelief,
  waterRelief,
} from "@/data/home";
import DynamicBgImg from "./DynamicBgImg";

const Hero = () => {
  const setImagesI = [moriaFireRelief.src, soapRelief.src, loadingTruck.src];
  const setImagesII = [soapRelief.src, loadingTruck.src, waterRelief.src];
  const setImagesIII = [loadingTruck.src, waterRelief.src, moriaFireRelief.src];
  return (
    <section className="flex gap-20 py-32 max-[768px]:py-20 justify-center flex-nowrap flex-shrink-0">
      <div className="size-[360px] opacity-50 translate-y-5 flex-none">
        <DynamicBgImg currentBg={waterRelief.src} otherBgImages={setImagesI} />
      </div>
      <div className="flex w-[48rem] max-[767px]:w-full h-[400px] justify-between items-center flex-none mx-auto px-2">
        <div className="max-[767px]:w-full w-[50%] pr-4 flex-shrink-0">
          <Image src={logoHero} alt="" className="py-2 max-[767px]:w-full" />
          <p className="text-primary text-[2.15rem] leading-[3rem]">Re-imagine {<br/>}Humanitarian Aid {<br/>}Delivery</p>
        </div>
        <div className="max-[767px]:hidden flex-1 h-full">
          <DynamicBgImg currentBg={moriaFireRelief.src} otherBgImages={setImagesII} />
        </div>
      </div>
      <div className="size-[360px] opacity-50 -translate-y-10 flex-none">
        <DynamicBgImg currentBg={soapRelief.src} otherBgImages={setImagesIII} />
      </div>
    </section>
  );
};

export default Hero;
