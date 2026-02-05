import { FC, ReactNode } from "react";
import { Button, Heading, Section, Text } from "@radix-ui/themes";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import frontlineGroups from "../../../../public/images/photos/photo-250000-000003-usa-hrt-toolkit.jpg";
import inKind from "../../../../public/images/photos/photo-250000-000004-usa-hrt-toolkit.jpg";

export const GetInvolved: FC = () => {
  return (
    <>
      <Section>
        <Heading as="h2" align="center" className="text-navy-800 mb-8" size="8">
          How To Get Involved
        </Heading>

        <div className="flex justify-center flex-wrap">
          <GetInvolvedBox
            title="Frontline Groups"
            image={frontlineGroups}
            buttonText="Sign up for the waitlist"
            link="https://docs.google.com/forms/d/e/1FAIpQLSeGWidm_jn_qj9aR3hQLmLHe4096xc4EVL4Xf7-rB6Mq6kQZQ/viewform?usp=header"
          >
            We’ve received a lot of demand from frontline groups. Please note
            that the form below is designed to signal interest in the project
            but does not gaurantee receiving supplies or any sort of timeline.
            We will reach out to relevant groups as the project grows and
            opportunities to participate arise in their location.
          </GetInvolvedBox>
          <GetInvolvedBox
            title="In-kind Donations"
            image={inKind}
            buttonText="Reach out to donate in kind"
            link="mailto:donate-aid@distributeaid.org"
          >
            We’re always looking for organizations and companies who can donate
            supplies. The items needed for the HRT Harm Reduction Toolkit
            include draw needles, injection needles, syringes, alcohol wipes,
            sharps containers, and band-aids. Please get in touch to ask for the
            exact specifications.
          </GetInvolvedBox>
        </div>
      </Section>
    </>
  );
};

type GetInvolvedBoxType = {
  buttonText: string;
  children?: ReactNode;
  image: StaticImageData;
  link: string;
  title: string;
};

const GetInvolvedBox: FC<GetInvolvedBoxType> = ({
  buttonText,
  children,
  image,
  link,
  title,
}) => (
  <div className="get-involved bg-navy-300 rounded-md m-4 w-full md:w-1/3">
    <Image
      src={image}
      className="w-full h-auto rounded-t-md max-h-[390px]"
      objectFit="cover"
      alt={title}
    />
    <div className="p-5">
      <div className="mb-4">
        <Text size="7" className="uppercase text-navy-800 mb-6 font-bold">
          {title}
        </Text>
      </div>
      <div className="font-bold mb-2">{children}</div>
      <Button
        size="2"
        mt="auto"
        className="bg-navy-600 hover:bg-navy-500 p-2"
        asChild
      >
        <Link href={link} target={"_blank"} rel="noopener noreferrer">
          {buttonText}
        </Link>
      </Button>
    </div>
  </div>
);
