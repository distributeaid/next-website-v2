import { Flex, Text } from "@radix-ui/themes";
import SmartLink from "../link/SmartLink";

interface Link {
  url: string;
  title: string;
  target?: string;
  currentLink: boolean;
}

interface LinkProps {
  links: Link[];
}
// TODO: Set currentLink boolean based on matching Next routing path to link object, instead of a manual link prop

const BreadCrumbs = ({ links }: LinkProps) => {
  return (
    <Flex py="3" className="breadcrumbs" gap="3">
      {links.map((link, index) => {
        const { url, target, title, currentLink } = link;
        return (
          <div key={index}>
            <SmartLink
              className={`pb-2 text-gray-800 ${currentLink ? "border-b-2 border-b-gray-800" : ""}`}
              href={url}
              target={target}
            >
              {title}
            </SmartLink>
            {index !== links.length - 1 && (
              <Text as="span" className="text-gray-800 pl-3">
                {">"}
              </Text>
            )}
          </div>
        );
      })}
    </Flex>
  );
};

export default BreadCrumbs;
