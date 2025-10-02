import {
  HeroSection,
  SubscribeCTA,
  WhatWeDo,
  WhereWeWork,
  HowWeHelp,
  Impact,
  Testimonials,
  GetInvolved,
} from "@/components/home";

import HeroSection from "@/components/ui/HeroSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <SubscribeCTA />
      <WhatWeDo />
      <WhereWeWork />
      <HowWeHelp />
      <Impact />
      <Testimonials />
      <GetInvolved />
    </main>
  );
};

export default Home;
