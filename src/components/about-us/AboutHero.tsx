import { FC } from "react";
import Image from "next/image";
import { Callout } from "@radix-ui/themes";

const AboutHero: FC = () => (
  <>
    <div className="absolute inset-0 bg-navy-900 -z-10 h-[609px]"></div>
    <Callout.Root color="green" className="bg-[var(--green-9)] rounded-none">
      <Callout.Text>Some message here</Callout.Text>
    </Callout.Root>
    <div className=" h-[943px] mt-12 flex justify-center items-center flex-col gap-8 sm:gap-[40px] md:gap-[86px]">
      <div className="text-[60px] tracking-[-0.16px] font-extrabold leading-[60px] text-center text-white">
        Distribute Aid
      </div>
      <div className="text-[28px] md:text-[36px] leading-[40px] text-center px-3 text-white max-h-full">
        To provide for basic human needs at scale by connecting communities and
        empowering people to uphold human dignity.
      </div>
      <div className="flex flex-wrap gap-8  justify-center items-start overflow-hidden h-[33%] sm:h-[40%] max-h-full">
        <Image
          src={"/images/about-us/hero-1.png"}
          alt="Hero Image"
          width={384}
          height={393}
          style={{
            width: "auto",
            height: "auto",
          }}
          // className="md:w-[calc(50%)]"
          className="max-h-full"
        />
        <Image
          src={"/images/about-us/hero-2.png"}
          alt="Hero Image"
          width={384}
          style={{
            width: "auto",
            height: "auto",
          }}
          height={393}
          className="max-h-full hidden md:block"
        />
        <Image
          src={"/images/about-us/hero-3.png"}
          alt="Hero Image"
          width={384}
          style={{
            width: "auto",
            height: "auto",
          }}
          height={393}
          className="max-h-full hidden md:block "
        />
      </div>
      <div className="w-full max-w-[569px] text-center text-[40px] md:text-[50px] font-extrabold leading-[60px] text-navy-900 tracking-[-0.4px]">
        Support us today, so communities are prepared for tomorrow.
      </div>
    </div>
  </>
);

export default AboutHero;
