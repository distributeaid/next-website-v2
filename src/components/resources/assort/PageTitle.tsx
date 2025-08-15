import { Heading } from "@radix-ui/themes";

interface PageTitleProps {
  title: string;
  bgColor: string;
  textColor: string;
}

export const PageTitle = ({ textColor, title, bgColor }: PageTitleProps) => {
  return (
    <div className={`bg-${bgColor} py-8`}>
      <Heading
        size={{ initial: "8", sm: "9" }}
        align="center"
        className={`text-${textColor}`}
      >
        {title}
      </Heading>
    </div>
  );
};
