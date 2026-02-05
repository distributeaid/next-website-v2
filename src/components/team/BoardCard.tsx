import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { MarkdownContent } from "../markdown/MarkdownContent";

interface CardProps {
  source: string;
  alt: string;
  name: string;
  blurb: string;
  bgColor: string;
}

const BoardCard = (props: CardProps) => {
  return (
    <>
      <Box className={`flex justify-center h-auto rounded-md ${props.bgColor}`}>
        <Flex direction="column" align="center">
          <div className="pt-7 px-7 w-full">
            <Box className="rounded-md overflow-hidden aspect-[4/3] w-full">
              <Image
                src={props.source}
                alt={props.alt}
                width={400}
                height={400}
                className="object-cover object-center w-full translate-y-[-50%]"
              />
            </Box>
            <Heading
              as="h6"
              color="gray"
              weight="bold"
              className="pt-3 flex justify-center"
            >
              {props.name.toUpperCase()}
            </Heading>
          </div>
          <Text
            as="div"
            color="gray"
            align="center"
            wrap="pretty"
            weight="medium"
            className="text-center h-full pt-10 px-4 pb-8 flex flex-col justify-center"
          >
            <MarkdownContent content={props.blurb} />
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default BoardCard;
