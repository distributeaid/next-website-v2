"use client";

import { FC, ReactNode, useState } from "react";
import { Button, Heading, Section, Text } from "@radix-ui/themes";
import * as Collapsible from "@radix-ui/react-collapsible";
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
          <GetInvolvedCollapse title="Frontline Groups" image={fortPickett}>
            <div className="font-bold">
              This is the information for frontline groups.
            </div>
            <Button
              size="2"
              mt="auto"
              className="bg-navy-600 hover:bg-navy-500 p-2"
            >
              Sign up for the waitlist
            </Button>
          </GetInvolvedCollapse>
          <GetInvolvedCollapse title="In-kind Donations" image={fortPickett}>
            <div className="font-bold">
              This is the information for in-kind donations.
            </div>
            <Button
              size="2"
              mt="auto"
              className="bg-navy-600 hover:bg-navy-500 p-2"
            >
              Reach out to donate in kind
            </Button>
          </GetInvolvedCollapse>
        </div>
      </Section>
    </>
  );
};

type CollapseType = {
  image: StaticImageData;
  children?: ReactNode;
  title: string;
};

const GetInvolvedCollapse: FC<CollapseType> = ({ title, children, image }) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root
      className="get-involved bg-navy-300 rounded-md m-4"
      open={open}
      onOpenChange={setOpen}
    >
      <Image src={image} className="w-full h-auto rounded-t-md" alt={title} />
      <div className="p-5">
        <div className="mb-4">
          <Text size="7" className="uppercase text-navy-800 mb-6 font-bold">
            {title}
          </Text>
        </div>
        <Collapsible.Trigger asChild>
          <Button
            size="2"
            mt="auto"
            className="bg-navy-600 hover:bg-navy-500 p-2"
          >
            More Info
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content>{children}</Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};
