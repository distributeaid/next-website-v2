interface ImageHeaderProps {
  heading: string;
  imageUrl: string;
}
const ImageHeader = (props: ImageHeaderProps) => {
  const { heading, imageUrl } = props;
  if (!imageUrl && !heading) {
    return <></>;
  }
  return <></>;
};
export default ImageHeader;
