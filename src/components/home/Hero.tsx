import HeroSection from "../ui/HeroSection";

const Hero = () => {
  return (
    <HeroSection
      heading="Your Mutual Aid Logistic
        Experts"
      imgSrc="/images/home/hero-image.jpg"
      imgAlt=""
      buttonHeading="Ship aid to people in need."
      buttons={[
        {
          label: "Donate with PayPal",
          href: "",
          bgWhite: true,
          targetBlank: true,
        },
        {
          label: "Use a Debit/Credit Card",
          href: "",
          targetBlank: true,
        },
        {
          label: "Make a Bank Transfer",
          href: "",
          targetBlank: true,
        },
      ]}
    />
  );
};

export default Hero;
