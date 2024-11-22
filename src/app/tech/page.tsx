import HeroSection from "@/components/tech/HeroSection";
import PageTitle from "../../components/pageTitle";
import Tech from "./tech";

const page = () => {
  return (
    <div className="relative flex justify-center item-center">
      <div className="absolute inset-0 bg-navy-900 w-full h-[450px] z-0"></div>
      <HeroSection />
    </div>
  );
};

export default page;
