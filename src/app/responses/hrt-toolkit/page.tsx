import { FC } from "react";
import { ResponseHero } from "@/components/responses/ResponseHero";
import { AboutTheProject } from "@/components/responses/hrt-toolkit/AboutTheProject";
import { HrtKitsInNumbers } from "@/components/responses/hrt-toolkit/HrtKitsInNumbers";
import { HowItWorks } from "@/components/responses/hrt-toolkit/HowItWorks";
import { GetInvolved } from "@/components/responses/GetInvolved";
import { Faq } from "@/components/responses/Faq";

import { faqs } from "@/data/hrtToolkitData";
import frontlineGroups from "../../../../public/images/photos/photo-250000-000003-usa-hrt-toolkit.jpg";
import inKind from "../../../../public/images/photos/photo-250000-000004-usa-hrt-toolkit.jpg";

const HrtToolkit: FC = () => {
  return (
    <main>
      <ResponseHero title="HRT — Harm Reduction Toolkit">
        We source harm reduction kits with medical equipment that our partners
        then distribute to trans people who take injection-based gender
        affirming hormone therapy.
      </ResponseHero>
      <HrtKitsInNumbers />
      <AboutTheProject />
      <HowItWorks />
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
