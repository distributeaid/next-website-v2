"use client";

import { FC, ReactNode, useState } from "react";
import { Button, Heading, Section, Text } from "@radix-ui/themes";
import { Collapsible } from "radix-ui";
import Image, { StaticImageData } from "next/image";
import fortPickett from "../../../../public/images/home/fort-pickett.jpg";

// Can't get the @radix-ui/react-collapsible package to work
// So I installed radix-ui for now. Don't forget to delete it later

export const GetInvolved: FC = () => {
  return (
    <>
      <Section>
        <Heading align="center" className="text-[#082B76] mb-8" size="8">
          How To Get Involved
        </Heading>

        <div className="flex justify-center">
          <GetInvolvedCollapse title="Frontline Groups" image={fortPickett}>
            This is the information for frontline groups.
          </GetInvolvedCollapse>
          <GetInvolvedCollapse title="In-kind Donations" image={fortPickett}>
            This is the information for in-kind donations.
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
      className="get-involved bg-[#C5CFE4] rounded-md m-4"
      open={open}
      onOpenChange={setOpen}
    >
      <Image src={image} className="w-full h-auto rounded-t-md" alt={title} />
      <div className="p-4">
        <div className="mb-4">
          <Text size="7" className="uppercase text-[#082B76] mb-6">
            {title}
          </Text>
        </div>
        <Collapsible.Trigger asChild>
          <Button size="2" mt="auto" className="bg-navy-600 hover:bg-navy-500">
            More Info
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content>{children}</Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};
