import { activities } from "../data/home";
import { lato } from "../components/ui/fonts";
import Image from "next/image";
import CounterStat from "../components/ui/CounterStat";
import Hero from "../components/ui/Hero";
import { MarkdownContent } from "@/components/markdown/MarkdownContent";
import homepageBanner from "../../public/images/homepage-banner-image.svg";
import sary from "../../public/images/lettermark_blue.svg";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-white">
      <Hero />
      <section
        className={`${lato.className} antialiased bg-secondary px-72 max-[1024px]:px-2 py-28 max-[768px]:py-20`}
      >
        <div className="flex pb-32 max-[1024px]:flex-col">
          <div className="w-[50%] text-3xl text-primary tracking-wide max-[1024px]:w-full max-[1024px]:text-2xl max-[768px]:text-[1.65rem]">
            <p>
              Distribute Aid delivers humanitarian aid to communities in need.
            </p>
            <p className="mt-10 max-[1024px]:mt-4">
              By coordinating end-to-end shipments, we make it easy for donors
              to connect with frontline aid organisations, understand the needs
              on the ground, and get their aid delivered.
            </p>
          </div>
          <div className="w-[50%] flex justify-between">
            {/* <div>TODO: Implement new Earth visualization</div> */}
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-12">How we help</h2>
        <ul>
          {activities.map((activity, index) => (
            <li
              key={index}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } mb-12 max-[768px]:flex-col`}
            >
              <div className="w-[50%] max-[768px]:w-full">
                <Image
                  src={activity.image}
                  className="w-full h-auto"
                  alt={activity.title}
                />
              </div>
              <div className="px-8 w-[50%] max-[768px]:w-full max-[768px]:px-0">
                <h3 className="text-2xl max-[768px]:text-[1.35rem]">
                  {activity.title}
                </h3>
                <h4 className="text-primary text-xl max-[768px]:text-lg mb-4">
                  {activity.region}
                </h4>
                <div className="text-[1rem] text-gray-800 [&_a]:text-primary [&_a]:underline">
                  <MarkdownContent content={activity.description} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <CounterStat />
    </main>
  );
};

export default Home;
