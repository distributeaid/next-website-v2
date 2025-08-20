import ContactForm from "@/components/contact-us/ContactForm";
import GotAidSection from "@/components/contact-us/GotAidSection";
import ImageHeader from "@/components/contact-us/ImageHeader";
import SupportUsSection from "@/components/contact-us/SupportUsSection";
import VolunteerSection from "@/components/contact-us/VolunteerSection";
const page = () => {
  return (
    <>
      {/* example use of ImageHeader */}
      {/* <ImageHeader
        imageUrl="/images/contact-us/gift-graphic.png"
        heading="Support Us"
      /> */}
      <ContactForm />
      <GotAidSection />
      <SupportUsSection />
      <VolunteerSection />
    </>
  );
};

export default page;
