import { FC } from "react";
import { Heading, Section } from "@radix-ui/themes";
import Image from "next/image";
import graph from "../../../../public/images/responses/hrt-toolkit/how-it-works-graph.png";

export const HowItWorks: FC = () => (
  <>
    <Section>
      <Heading as="h2" align="center" className="text-navy-800" size="8">
        How It Works
      </Heading>
      <div className="flex justify-center pb-4">
        <Image
          src={graph}
          className="w-5/6"
          alt="Materials purchased with monetary donations and obtained through in-kind donations are assembled to make the kits. The kits are sent to frontline groups who distribute them in their area."
        />
      </div>
      <div className="font-bold text-center text-lg">
        Good to know: Kits are never distributed directly to people but only
        through frontline organizations!
      </div>
    </Section>
  </>
);
