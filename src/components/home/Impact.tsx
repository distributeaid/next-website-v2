import { Grid } from "@radix-ui/themes";
import ImpactCard from "../impact-card/ImpactCard";
import { ImpactData } from "@/data/stats";

import Section from "../ui/SectionWithTitle";

const OurImpact = () => {
  return (
    <Section title="Our Impact" subTitle="July 2020—June 2025 in numbers">
      <Grid asChild columns={{ initial: "1", md: "2", lg: "3" }} gap="4">
        <ul>
          {ImpactData.map((item, index) => (
            <li
              key={index}
              className={`${item.id === 1 && "md:col-span-2 lg:col-span-1"} 
                    ${item.id === 7 && "xl:col-span-2"} 
                    ${item.id === 8 && "md:col-span-2 lg:col-span-1"}`}
            >
              <ImpactCard
                icon={item.icon}
                value={item.value}
                label={item.label}
              />
            </li>
          ))}
        </ul>
      </Grid>
    </Section>
  );
};

export default OurImpact;
