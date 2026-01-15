import { Heading, Text, Grid, Section } from "@radix-ui/themes";
import ImpactCard from "../impact-card/ImpactCard";
import { ImpactData } from "@/data/home/ourImpact";

const OurImpact = () => {
  return (
    <Section className="px-6 md:px-16" aria-labelledby="impact-section-title">
      <Heading
        as="h2"
        weight="bold"
        align="center"
        mb="4"
        className="font-yantramanav font-bold text-[60px] leading-[60px] tracking-[-0.16px] text-navy-700"
        id="impact-section-title"
      >
        Our Impact
      </Heading>
      <Text
        align="center"
        className="font-roboto font-normal text-[20px] leading-[24px] tracking-[0] text-navy-900"
        mb="8"
        as="p"
      >
        July 2020—June 2025 in numbers
      </Text>

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
