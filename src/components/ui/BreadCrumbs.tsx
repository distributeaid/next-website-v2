import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Link {
  url: string;
  title: string;
  target?: string;
  currentLink: boolean;
}

interface LinkProps {
  links: Link[];
}

const BreadCrumbs = ({ links }: LinkProps) => {
  return (
    <Flex py="3" className="breadcrumbs" gap="3">
      {links.map((link, index) => {
        const { url, target, title, currentLink } = link;
        return (
          <div key={index}>
            <Link
              className={`pb-3 text-[#1F2937] ${currentLink ? "border-b border-b-[#1F2937]" : ""}`}
              href={url}
              target={target}
              rel="noreferrer"
            >
              {title}
            </Link>
            {index !== links.length - 1 && (
              <Text as="span" className="text-[#1F2937] pl-3">
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
