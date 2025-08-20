import Image from "next/image";
import { Flex, Box, Heading } from "@radix-ui/themes";
interface ImageHeaderProps {
  heading: string;
  imageUrl: string;
}

const ImageHeader = (props: ImageHeaderProps) => {
  const { heading, imageUrl } = props;
  if (!imageUrl && !heading) {
    return <></>;
  }
  return (
    <>
      <Flex align={"center"} gap={"3"}>
        <Box
          width={{ initial: "60px", md: "80px" }}
          height={{ initial: "60px", md: "80px" }}
        >
          <Image src={imageUrl} alt="graphic img" width={80} height={80} />
        </Box>
        <Heading
          as="h2"
          size={{ initial: "7", sm: "8" }}
          className="text-navy-900"
        >
          {heading}
        </Heading>
      </Flex>
    </>
  );
};
export default ImageHeader;
