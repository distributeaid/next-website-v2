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
