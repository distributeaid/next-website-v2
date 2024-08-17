import ExternalLink from "@/components/link/ExternalLink";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  href: string;
  src: string;
  altText: string;
}

const SocialMediaLink: FC<Props> = ({ href, src, altText }) => {
  return (
    <Link href={href} legacyBehavior passHref>
      <ExternalLink href={href}>
        <aside className="w-16 h-16 flex flex-col justify-center items-center -mr-4">
          <Image width="40" src={src} alt={altText} />
        </aside>
      </ExternalLink>
    </Link>
  );
};

export default SocialMediaLink;
