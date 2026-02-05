"use client";

import { FC, useEffect, useState } from "react";

import { getThemeLargeScreenWidth } from "@/utils/site-theme";
import siteSettings from "@/data/site-settings.json";
import SocialMediaLink from "./SocialMediaLink";

import facebookSrc from "../../../public/images/icons/icon-social-facebook.svg";
import githubSrc from "../../../public/images/icons/icon-social-github.svg";
import instagramSrc from "../../../public/images/icons/icon-social-instagram.svg";
import linkedInSrc from "../../../public/images/icons/icon-social-linked-in.svg";
import twitterSrc from "../../../public/images/icons/icon-social-twitter.svg";

const socialMediaDetails = [
  {
    href: siteSettings.instagramUrl,
    src: instagramSrc,
    altText: "Instagram icon",
  },
  {
    href: siteSettings.twitterUrl,
    src: twitterSrc,
    altText: "Twitter icon",
  },
  {
    href: siteSettings.linkedinUrl,
    src: linkedInSrc,
    altText: "LinkedIn icon",
  },
  {
    href: siteSettings.facebookUrl,
    src: facebookSrc,
    altText: "Facebook icon",
  },
  {
    href: siteSettings.githubUrl,
    src: githubSrc,
    altText: "Github icon",
  },
];

interface Props {
  position: "footer" | "side";
}

const SocialIconContainer: FC<Props> = ({ position }) => {
  const isBrowser = typeof window !== "undefined";
  const [screenWidth, setScreenWidth] = useState(
    isBrowser ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window?.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (screenWidth < getThemeLargeScreenWidth() && position === "side") {
    return null;
  }

  return (
    <div className={`flex flex-${position === "side" ? "col" : "row"}`}>
      {socialMediaDetails.map((detail) => (
        <SocialMediaLink key={detail.href} {...detail} />
      ))}
    </div>
  );
};

export default SocialIconContainer;
