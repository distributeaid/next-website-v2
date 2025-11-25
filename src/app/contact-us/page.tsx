import ContactForm from "@/components/contact-us/ContactForm";
// import GotAidSection from "@/components/contact-us/GotAidSection";
// import ImageHeader from "@/components/contact-us/ImageHeader";
import SupportUsSection from "@/components/contact-us/SupportUsSection";
// import VolunteerSection from "@/components/contact-us/VolunteerSection";
import { Container } from "@radix-ui/themes";
import { ContactPageTitle } from "@/components/contact-us/ContactPageTitle";
const page = () => {
  return (
    <>
      <ContactPageTitle />
      <Container>
        <ContactForm />
        <SupportUsSection />
      </Container>
    </>
  );
};

export default page;
