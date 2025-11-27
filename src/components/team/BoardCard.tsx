import { Box, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

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
      <Box
        className={`w-[600px] flex justify-center h-auto rounded-md ${props.bgColor}`}
      >
        <Grid>
          <div className="flex justify-center pt-7">
            <Image
              src={props.source}
              alt={props.alt}
              width={50}
              height={50}
              style={{ width: "90%", height: "auto", objectFit: "cover" }}
              className="rounded-md"
            />
          </div>
          <Heading
            as="h6"
            color="gray"
            weight="bold"
            className="pt-3 flex justify-center"
          >
            {props.name.toUpperCase()}
          </Heading>
          <Text
            as="p"
            color="gray"
            align="center"
            wrap="pretty"
            className="text-center pt-10 px-2 pb-8"
          >
            {props.blurb}
          </Text>
        </Grid>
      </Box>
    </>
  );
};

export default BoardCard;
