import { FC } from "react";
import { ResponseHero } from "@/components/responses/ResponseHero";
import { AboutTheProject } from "@/components/responses/AboutTheProject";
import { RefugeeSupportEUByTheNumbers } from "@/components/responses/refugee-support-eu/RefugeeSupportEUByTheNumbers";
import { HowWeWork } from "@/components/responses/HowWeWork";
import { GetInvolved } from "@/components/responses/GetInvolved";
import { Faq } from "@/components/responses/Faq";
import { faqs } from "@/data/RefugeeSupportEUData";

import graphHorizontal from "../../../../public/images/illus/refugee-support-eu-response/illus-how-it-works-graph.png";
import graphVertical from "../../../../public/images/illus/refugee-support-eu-response/illus-how-it-works-vertical.png";

const RefugeeSupportEurope: FC = () => {
  return (
    <main>
      <ResponseHero title={"European Refugee Support"}></ResponseHero>
      <RefugeeSupportEUByTheNumbers />
      <AboutTheProject
        heading="About The European Refugee Support Project"
        summary={
          <>
            We deliver supplies to refugee camps, community centers, and
            grassroots groups serving people on the move. We also work with a
            network of organizations across the continent to help them be more
            sustainable and effective by reducing costs and acquiring new
            sources of aid.
          </>
        }
        images={[
          {
            img: "https://res.cloudinary.com/dthervbn8/image/upload/v1741004789/Responses/Refugees%20Europe/Calais/grand_synthe_eviction_jan_21_wjafzm.jpg",
            alt: "The first about image",
          },
          {
            img: "https://res.cloudinary.com/dthervbn8/image/upload/v1741004789/Responses/Refugees%20Europe/Calais/adbul_feb_2021_living_sites_in_winter_calais_tyessn.jpg",
            alt: "The second about image",
          },
        ]}
        ctaText="Help Us Fund More Kits"
        donateText="Donate via Omprakash"
        donateURL="https://www.omprakash.org/global/distribute-aid/donate"
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
              "https://res.cloudinary.com/dthervbn8/image/upload/v1777570088/Responses/Refugees%20Europe/Greece%202019/Food_and_laundry_street_distro_Athens_STEPS_askkae.jpg",
            buttonText: "Send Aid to Refugee Support EU",
            link: "https://www.omprakash.org/global/distribute-aid/donate",
            children: (
              <>
                Your donation goes straight to people in need—we spend only 3%
                of funds raised on staff salaries. That’s why the UN gave us
                their “Most Direct Human Impact Award.”
              </>
            ),
          },
          {
            title: "Donate supplies",
            image:
              "https://res.cloudinary.com/dthervbn8/image/upload/v1734536401/Responses/Refugees%20Europe/22-036-044-GBR-GRC/WhatsApp_Image_2022-11-17_at_14.25.05_u1o2l3.jpg",
            buttonText: "Reach out to donate in kind",
            link: "mailto:donate-aid@distributeaid.org",
            children: (
              <>
                Hygiene products, medical supplies, and clothing are always in
                high demand among the people we serve. If you or your
                organization would like to make a tax-deductible donation,
                please get in touch.
              </>
            ),
          },
          {
            title: "Ship aid with us",
            image:
              "https://res.cloudinary.com/dthervbn8/image/upload/v1734516917/Responses/Refugees%20Europe/21-011-CHN-FRA/WhatsApp_Image_2021-11-02_at_20.27.27_1_xz3scp.jpg",
            buttonText: "Ship aid with us",
            link: "mailto:logistics@distributeaid.org",
            children: (
              <>
                Whether you're a company who's already found a frontline
                organization to support, or a grassroots group who's too busy
                helping people to organize a full shipment, our logistics team
                is here to help. Don't wait until it's too late and the customs
                fines are stacking up- reach out anytime and we'll help arrange
                safe, secure shipping to get your aid delivered.
              </>
            ),
          },
        ]}
      />
      <Faq faqs={faqs} />
    </main>
  );
};

export default RefugeeSupportEurope;
