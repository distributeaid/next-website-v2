import {
  SubscribeCTA,
  WhatWeDo,
  WhereWeWork,
  HowWeHelp,
  Impact,
  Testimonials,
} from "@/components/home";
import HeroSection from "@/components/ui/HeroSection";
const Home = () => {
  return (
    <main>
      <HeroSection
        heading="Your Mutual Aid Logistic
        Experts"
        imgSrc="/images/photos/photo-grc-moria-fire-relief.jpg"
        imgAlt="hero image"
        buttonHeading="Ship aid to people in need."
        buttonBGColor="#DFCDE8"
      />
      <SubscribeCTA />
      <WhatWeDo />
      <WhereWeWork />
      <HowWeHelp />
      <Impact />
      <Testimonials />
    </main>
  );
};

export default Home;
