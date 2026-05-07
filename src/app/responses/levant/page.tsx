import { FC } from "react";
import { Link } from "@radix-ui/themes";
import { ResponseHero } from "@/components/responses/ResponseHero";
import { AboutTheProject } from "@/components/responses/AboutTheProject";
import { LevantByTheNumbers } from "@/components/responses/levant/LevantByTheNumbers";
import { HowWeWork } from "@/components/responses/HowWeWork";
import { GetInvolved } from "@/components/responses/GetInvolved";
import { Faq } from "@/components/responses/Faq";

import { faqs } from "@/data/levantResponseData";

import graphHorizontal from "../../../../public/images/illus/levant-response/illus-how-it-works-graph.png";
import graphVertical from "../../../../public/images/illus/levant-response/illus-how-it-works-vertical.png";

const HrtToolkit: FC = () => {
  return (
    <main>
      <ResponseHero title="Levant Response"></ResponseHero>
      <LevantByTheNumbers />
      <AboutTheProject
        heading="About Levant Emergency Relief"
        summary={
          <>
            <span className="mb-5 block">
              We provide emergency relief to war refugees, and equip them with
              the tools and training needed to help their own communities. We do
              this by sourcing bulk quantities of food, medical equipment, and
              hygiene products from donors—and asking displaced people what they
              need to heal.
            </span>

            <span className="block">
              Then we package those goods into shipping containers and transport
              them to Lebanon, Jordan, and occupied Palestine. There, we work
              with our partners at{" "}
              <Link href="https://www.anera.org/" target="_blank">
                Anera
              </Link>{" "}
              to get this life-saving aid directly into the hands of people in
              need.
            </span>
          </>
        }
        images={[
          {
            img: "https://res.cloudinary.com/dthervbn8/image/upload/f_auto/Responses/Levant/Anera%20Photo%20Library/Gaza/gaza_emergency-response_2024-february-20_IMG-20240220-WA0019-EDIT_vstfeb.jpg",
            alt: "The first about image",
          },
          {
            img: "https://res.cloudinary.com/dthervbn8/image/upload/f_auto/Responses/Levant/Anera%20Photo%20Library/Gaza/GazaAnera2024_fyn9zs.jpg",
            alt: "The second about image",
          },
        ]}
        ctaText="Help Us Fund More Kits"
        donateText="Donate via Omprakash"
        donateURL="https://www.omprakash.org/global/distribute-aid/crowdfund/us-disaster-relief"
      />
      <HowWeWork
        title="How We Work"
        chartHorizontal={graphHorizontal}
        chartVertical={graphVertical}
        altText="Materials purchased with monetary donations and obtained through in-kind donations are assembled to make the kits. The kits are sent to frontline groups who distribute them in their area."
      />
      <GetInvolved
        boxes={[
          {
            title: "Give money",
            image:
              "https://res.cloudinary.com/dthervbn8/image/upload/f_auto/Responses/Levant/Anera%20Photo%20Library/Gaza/IMG-20240120-WA0010_1_ktrfxi.jpg",
            buttonText: "Send Aid to the Levant",
            link: "https://www.omprakash.org/global/distribute-aid/crowdfund/send-aid-to-the-levant",
            children: (
              <>
                For every $1 you donate, 97¢ goes directly to delivering aid for
                refugees displaced by conflict. Your gift provides human dignity
                for people who deserve it.
              </>
            ),
          },
          {
            title: "Donate supplies",
            image:
              "https://res.cloudinary.com/dthervbn8/image/upload/f_auto/Responses/Levant/Anera%20Photo%20Library/Gaza/gaza_emergency-response_2024-february-18_IMG-20240218-WA0006-EDIT_1_pr2ap8.jpg",
            buttonText: "Reach out to donate in kind",
            link: "mailto:donate-aid@distributeaid.org",
            children: (
              <>
                If you or your organization want to make a tax-deductible
                donation of clothing, hygiene products, medical tools, or other
                supplies, please get in touch.
              </>
            ),
          },
        ]}
      />
      <Faq faqs={faqs} />
    </main>
  );
};

export default HrtToolkit;
