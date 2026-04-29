import { FC, ReactNode, useId } from "react";
import { Button, Heading, Section, Text } from "@radix-ui/themes";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface GetInvolvedProps {
  boxes: GetInvolvedBoxType[];
}

export const GetInvolved: FC<GetInvolvedProps> = ({ boxes }) => {
  return (
    <>
      <Section>
        <Heading as="h2" align="center" className="text-navy-800 mb-8" size="8">
          How To Get Involved
        </Heading>

        <div className="flex justify-center flex-wrap">
          {boxes.map(({ children, ...rest }, index) => (
            <GetInvolvedBox key={index} {...rest}>
              {children}
            </GetInvolvedBox>
          ))}
        </div>
      </Section>
    </>
  );
};

type GetInvolvedBoxType = {
  buttonText: string;
  children?: ReactNode;
  image: StaticImageData;
  link: string;
  title: string;
};

const GetInvolvedBox: FC<GetInvolvedBoxType> = ({
  buttonText,
  children,
  image,
  link,
  title,
}) => (
  <div className="get-involved bg-navy-300 rounded-md m-4 w-full md:w-1/3">
    <Image
      src={image}
      className="w-full h-auto rounded-t-md max-h-[390px]"
      objectFit="cover"
      alt={title}
    />
    <div className="p-5">
      <div className="mb-4">
        <Text size="7" className="uppercase text-navy-800 mb-6 font-bold">
          {title}
        </Text>
      </div>
      <div className="font-bold mb-2">{children}</div>
      <Button
        size="2"
        mt="auto"
        className="bg-navy-600 hover:bg-navy-500 p-2"
        asChild
      >
        <Link href={link} target={"_blank"} rel="noopener noreferrer">
          {buttonText}
        </Link>
      </Button>
    </div>
  </div>
);
