import { activities, socials } from "../data/home";
import { lato } from "../app/ui/fonts";
import Image from "next/image";
import CounterStat from "./ui/CounterStat";
import Hero from "./ui/Hero";
import homepageBanner from "../../public/images/homepage-banner-image.svg";
import sary from "../../public/images/lettermark_blue.svg"
import Earth3D from "./ui/Earth3D";

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
            <div>
              <Earth3D svgPath={sary.src} />
            </div>
            <ul className="flex flex-col gap-4 max-[1024px]:hidden">
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener"
                    className="text-primary"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      className="size-8"
                    />
                  </a>
                </li>
              ))}
            </ul>
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
                <h3 className="text-2xl max-[768px]:text-[1.35rem]">{activity.title}</h3>
                <h4 className="text-primary text-xl max-[768px]:text-lg mb-4">{activity.region}</h4>
                <p
                  dangerouslySetInnerHTML={{ __html: activity.description }}
                  className="text-[1rem] text-gray-800"
                />
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
