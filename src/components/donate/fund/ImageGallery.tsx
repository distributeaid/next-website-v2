import { Grid, Box, Container } from "@radix-ui/themes";
import Image from "next/image";
import { FundProps } from "@/types/fund";

const ImageGallery = ({ fund }: FundProps) => {
  const { gallery_images } = fund;
  if (!gallery_images || Array(gallery_images).length === 0) {
    return <></>;
  }
  return (
    <Container
      size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
      align="center"
      px="4"
    >
      <Grid
        display="grid"
        columns={{ initial: "2", sm: "4" }}
        rows={{ initial: "2", sm: "1" }}
        gap="4"
        flow="column"
        width="100%"
        mb="64px"
      >
        <>
          {gallery_images &&
            gallery_images.map((image, index) => (
              <Box key={index}>
                <Image
                  src={
                    image || "/images/donate/ukraine-response-gallery-03.png"
                  }
                  alt={""}
                  height={0}
                  width={0}
                  sizes={"100vw"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>
            ))}
        </>
      </Grid>
    </Container>
  );
};

export default ImageGallery;
