import { FC, ReactNode } from "react";
import { Button, Heading, Section, Text } from "@radix-ui/themes";
import Image, { StaticImageData } from "next/image";
import fortPickett from "../../../../public/images/home/fort-pickett.jpg";

export const GetInvolved: FC = () => {
  return (
    <>
      <Section>
        <Heading as="h2" align="center" className="text-navy-800 mb-8" size="8">
          How To Get Involved
        </Heading>

        <div className="flex justify-center flex-wrap">
          <GetInvolvedBox title="Frontline Groups" image={fortPickett}>
            <div className="font-bold  mb-2">
              This is the information for frontline groups. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <Button
              size="2"
              mt="auto"
              className="bg-navy-600 hover:bg-navy-500 p-2"
            >
              Sign up for the waitlist
            </Button>
          </GetInvolvedBox>
          <GetInvolvedBox title="In-kind Donations" image={fortPickett}>
            <div className="font-bold mb-2">
              This is the information for in-kind donations.
            </div>
            <Button
              size="2"
              mt="auto"
              className="bg-navy-600 hover:bg-navy-500 p-2"
            >
              Reach out to donate in kind
            </Button>
          </GetInvolvedBox>
        </div>
      </Section>
    </>
  );
};

type GetInvolvedBoxType = {
  image: StaticImageData;
  children?: ReactNode;
  title: string;
};

const GetInvolvedBox: FC<GetInvolvedBoxType> = ({ title, children, image }) => (
  <div className="get-involved bg-navy-300 rounded-md m-4 w-full md:w-1/3">
    <Image src={image} className="w-full h-auto rounded-t-md" alt={title} />
    <div className="p-5">
      <div className="mb-4">
        <Text size="7" className="uppercase text-navy-800 mb-6 font-bold">
          {title}
        </Text>
      </div>
      <div>
          {children}
      </div>
    </div>
  </div>
);
