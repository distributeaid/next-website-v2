import { FC } from "react";
import { ResponseHero } from "@/components/responses/ResponseHero";
import { AboutTheProject } from "@/components/responses/hrt-toolkit/AboutTheProject";
import { HrtKitsInNumbers } from "@/components/responses/hrt-toolkit/HrtKitsInNumbers";
import { HowItWorks } from "@/components/responses/hrt-toolkit/HowItWorks";
import { GetInvolved } from "@/components/responses/hrt-toolkit/GetInvolved";
import { Faq } from "@/components/responses/Faq";

import { faqs } from "@/data/hrtToolkitData";

const HrtToolkit: FC = () => {
  return (
    <main>
      <ResponseHero title="HRT — Harm Reduction Toolkit" >We source harm reduction kits with medical equipment that our partners then distribute to trans people who take injection-based gender affirming hormone therapy.</ResponseHero> 
      <HrtKitsInNumbers />
      <AboutTheProject />
      <HowItWorks />
      <GetInvolved />
      <Faq faqs={faqs} />
    </main>
  );
};

export default HrtToolkit;
