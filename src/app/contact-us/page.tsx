import ContactForm from "@/components/contact-us/ContactForm";
import SupportUsSection from "@/components/contact-us/SupportUsSection";
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
