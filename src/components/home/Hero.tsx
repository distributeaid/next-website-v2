import HeroSection from "../ui/HeroSection";

const Hero = () => {
  return (
    <HeroSection
      heading="Your Mutual\nAid Logistic\nExperts"
      imgSrc="/images/home/hero-image.jpg"
      imgAlt=""
      buttonHeading="Ship aid to people in need."
      buttons={[
        {
          label: "Donate with PayPal",
          href: "",
          targetBlank: true,
        },
        {
          label: "Use a Debit/Credit Card",
          href: "",
          invertColors: true,
          targetBlank: true,
        },
        {
          label: "Make a Bank Transfer",
          href: "",
          invertColors: true,
          targetBlank: true,
        },
      ]}
    />
  );
};

export default Hero;
