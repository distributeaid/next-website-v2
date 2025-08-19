import ContactForm from "@/components/contact-us/ContactForm";
import GotAidSection from "@/components/contact-us/GotAidSection";
import ImageHeader from "@/components/contact-us/ImageHeader";
import SupportUsSection from "@/components/contact-us/SupportUsSection";
import VolunteerSection from "@/components/contact-us/VolunteerSection";
const page = () => {
  return (
    <>
      <ImageHeader />
      <ContactForm />
      <GotAidSection />
      <SupportUsSection />
      <VolunteerSection />
    </>
  );
};

export default page;
