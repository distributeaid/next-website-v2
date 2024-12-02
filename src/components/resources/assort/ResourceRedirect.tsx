import { Link } from "@radix-ui/themes";
import React from "react";

interface ResourceRedirectProps {
  link: string;
  text: string;
}

export const ResourceRedirect: React.FC<ResourceRedirectProps> = ({
  link,
  text,
}) => {
  return (
    <Link href={`https://${link}`} className="text-inherit " underline="always">
      {text}
    </Link>
  );
};
