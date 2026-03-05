import { Box, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

interface ServiceCardProps {
  img: string;
  title: string;
  description: string;
  alt: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  img,
  alt,
  title,
  description,
}) => {
  return (
    <Box>
      <Box
        className={"h-[288px] md:h-[400px] lg:h-[432px]"}
        width="100%"
        overflow="hidden"
        position="relative"
      >
        <Image
          src={img}
          alt={alt}
          fill
          className="object-cover rounded-2xl absolute"
          loading="lazy"
          sizes="100vw"
        />
      </Box>

      <Heading
        as="h2"
        align="center"
        weight="bold"
        className="text-navy-900"
        mt="6"
      >
        {title}
      </Heading>
      <Text
        align="center"
        weight="regular"
        as="p"
        className="text-navy-900 px-2 md:px-9"
        mt="3"
      >
        {description}
      </Text>
    </Box>
  );
};

export default ServiceCard;
