import { Section as RadixSection, Heading, Text } from "@radix-ui/themes";
import { ReactNode } from "react";

interface HomeSectionProps {
  title: String;
  subTitle?: String;
  backgroundColor?: String;
  noPadding?: boolean;
  children: React.ReactNode;
}

const Section = ({
  title,
  subTitle,
  backgroundColor,
  noPadding,
  children,
}: HomeSectionProps) => {
  const headingId = `${title.toLowerCase().replaceAll(" ", "-")}-section-title`;

  return (
    <RadixSection
      className={`${noPadding ? "p-0" : "px-6 md:px-16"} ${backgroundColor && `bg-${backgroundColor}`}`}
      aria-labelledby={headingId}
    >
      <SectionHeading id={headingId}>{title}</SectionHeading>
      {subTitle && (
        <Text
          align="center"
          className="font-roboto font-normal text-[20px] leading-[24px] tracking-[0] text-navy-900"
          mb="8"
          as="p"
        >
          {subTitle}
        </Text>
      )}
      {children}
    </RadixSection>
  );
};

interface SectionHeadingProps {
  id: string;
  children: ReactNode;
}

export const SectionHeading = ({ id, children }: SectionHeadingProps) => (
  <Heading
    as="h2"
    weight="bold"
    align="center"
    mb="4"
    className="font-yantramanav font-bold text-[60px] leading-[60px] tracking-[-0.16px] text-navy-700"
    id={id}
  >
    {children}
  </Heading>
);

export default Section;
