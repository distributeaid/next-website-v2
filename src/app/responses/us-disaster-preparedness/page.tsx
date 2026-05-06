import { FC } from "react";
import { ResponseHero } from "@/components/responses/ResponseHero";
import { AboutTheProject } from "@/components/responses/AboutTheProject";
import { USDisasterByTheNumbers } from "@/components/responses/us-disaster-preparedness/USDisasterByTheNumbers";
import { HowWeWork } from "@/components/responses/HowWeWork";
import { GetInvolved } from "@/components/responses/GetInvolved";
import { Faq } from "@/components/responses/Faq";

import { faqs } from "@/data/usDisasterPreparednessData";

import graphHorizontal from "../../../../public/images/illus/us-disaster-preparedness-response/illus-how-it-works-graph.png";
import graphVertical from "../../../../public/images/illus/us-disaster-preparedness-response/illus-how-it-works-vertical.png";

const USDisasterPreparedness: FC = () => {
  return (
    <main>
      <ResponseHero title="US Disaster Preparedness Network"></ResponseHero>
      <USDisasterByTheNumbers />
      <AboutTheProject
        heading="About The US Disaster Preparedness Project"
        summary={
          <>
            We develop close relationships with mutual aid groups in areas
            around the country, and create disaster response plans together.
            Then we secure large quantities of emergency supplies, and
            pre-position them in centralized hubs. When a disaster strikes, we
            provide our grassroots partners with the supplies they need to
            protect their communities.
          </>
        }
        images={[
          {
            img: "https://res.cloudinary.com/dthervbn8/image/upload/v1756722462/Responses/USA/25-016-USA-USA/IMG_8747_fqfkej.jpg",
            alt: "The first about image",
          },
          {
            img: "https://res.cloudinary.com/dthervbn8/image/upload/f_auto/Responses/USA/25-002-USA-USA/IMG_0300_cg4c17_10c368.heic",
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
            // change heic urls to /upload/f_auto/Responses
            image:
              "https://res.cloudinary.com/dthervbn8/image/upload/f_auto/Responses/USA/25-002-USA-USA/IMG_0671_toab6y.heic",
            buttonText: "Send Aid to US Diaster Relief",
            link: "https://www.omprakash.org/global/distribute-aid/crowdfund/us-disaster-relief",
            children: (
              <>
                If you or your organization want to donate food, clothing,
                medical equipment, hygiene products, or other supplies, please
                send us an email. Your donation is tax-deductible.
              </>
            ),
          },
          {
            title: "Donate supplies",
            image:
              "https://res.cloudinary.com/dthervbn8/image/upload/f_auto/Responses/USA/25-002-USA-USA/IMG_0189_jlrcd5.heic",
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
          {
            title: "Join Our Network",
            image:
              "https://res.cloudinary.com/dthervbn8/image/upload/v1732620131/Responses/USA/24-025-USA-USA/Afya_Atlanta_pickup_10-8_sif1tx.jpg",
            buttonText: "Reach out to us",
            link: "mailto:hello@distributeaid.org",
            children: (
              <>
                Does your community organization want to create a disaster
                response plan? Interested in pre-positioning supplies in your
                area? Send us a note and we’ll get in touch.
              </>
            ),
          },
        ]}
      />
      <Faq faqs={faqs} />
    </main>
  );
};

export default USDisasterPreparedness;
