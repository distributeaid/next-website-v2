import { FC } from "react";
import { ResponseHero } from "@/components/responses/ResponseHero";
import { AboutTheProject } from "@/components/responses/AboutTheProject";
import { HrtKitsInNumbers } from "@/components/responses/hrt-toolkit/HrtKitsInNumbers";
import { HowWeWork } from "@/components/responses/HowWeWork";
import { GetInvolved } from "@/components/responses/GetInvolved";
import { Faq } from "@/components/responses/Faq";

import { faqs } from "@/data/hrtToolkitData";

import frontlineGroups from "../../../../public/images/photos/photo-250000-000003-usa-hrt-toolkit.jpg";
import inKind from "../../../../public/images/photos/photo-250000-000004-usa-hrt-toolkit.jpg";

import graphHorizontal from "../../../../public/images/illus/illus-how-it-works-graph.png";
import graphVertical from "../../../../public/images/illus/illus-how-it-works-vertical.png";

import aboutOne from "../../../../public/images/photos/photo-250000-000001-usa-hrt-toolkit.jpg";
import aboutTwo from "../../../../public/images/photos/photo-250000-000002-usa-hrt-toolkit.jpg";

const HrtToolkit: FC = () => {
  return (
    <main>
      <ResponseHero title="HRT — Harm Reduction Toolkit">
        We source harm reduction kits with medical equipment that our partners
        then distribute to trans people who take injection-based gender
        affirming hormone therapy.
      </ResponseHero>
      <HrtKitsInNumbers />
      <AboutTheProject
        heading="About The HRT Harm Reduction Toolkit Project"
        summary={
          <>
            Each kit includes a{" "}
            <strong>1-year supply of medical equipment</strong> necessary to
            administer injection-based hormone therapy. Each kit is worth
            approximately $65 when purchased at retail value. Using our existing
            mutual aid networks, the kits are delivered to local frontline
            organizations who distribute the kits for free to trans people in
            need.
          </>
        }
        images={[
          {
            img: aboutOne,
            alt: "The first about image",
          },
          {
            img: aboutTwo,
            alt: "The second about image",
          },
        ]}
        listItems={[
          "The kits do not provide hormones but the sundries needed to administer safely",
          "Harm reduction kits reduce risks from needle sharing or reuse and provide trans people with privacy in a hostile political climate",
          "Access to gender-affirming hormone therapy saves lives",
        ]}
        ctaText="Help Us Fund More Kits"
        donateText="Donate via Omprakash"
        donateURL="https://www.omprakash.org/global/distribute-aid/crowdfund/hrt---harm-reduction-toolkit"
      />
      <HowWeWork
        title="How It Works"
        chartHorizontal={graphHorizontal}
        chartVertical={graphVertical}
        altText="Materials purchased with monetary donations and obtained through in-kind donations are assembled to make the kits. The kits are sent to frontline groups who distribute them in their area."
        footnote="Good to know: Kits are never distributed directly to people but only through frontline organizations!"
      />
      <GetInvolved
        boxes={[
          {
            title: "Frontline Groups",
            image: frontlineGroups,
            buttonText: "Sign up for the waitlist",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeGWidm_jn_qj9aR3hQLmLHe4096xc4EVL4Xf7-rB6Mq6kQZQ/viewform?usp=header",
            children: (
              <>
                We've received a lot of demand from frontline groups. Please
                note that the form below is designed to signal interest in the
                project but does not gaurantee receiving supplies or any sort of
                timeline. We will reach out to relevant groups as the project
                grows and opportunities to participate arise in their location.
              </>
            ),
          },
          {
            title: "In-kind Donations",
            image: inKind,
            buttonText: "Reach out to donate in kind",
            link: "mailto:donate-aid@distributeaid.org",
            children: (
              <>
                We're always looking for organizations and companies who can
                donate supplies. The items needed for the HRT Harm Reduction
                Toolkit include draw needles, injection needles, syringes,
                alcohol wipes, sharps containers, and band-aids. Please get in
                touch to ask for the exact specifications.
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
