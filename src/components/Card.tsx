import React from "react";
import { FC, PropsWithChildren, ReactNode } from "react";
import classNames from "classnames";
import Image from "next/image";
import SmartLink from "./link/SmartLink";
import { Action, DynamicCardImage } from "@/types/card";
import { getBackgroundColor } from "@/utils/site-theme";

export enum ImageVariant {
  square,
  circle,
}

const createAction = (action: Action) => (
  <SmartLink
    key={action.label}
    className="inline-block bg-navy-700 hover:bg-navy-800 rounded text-white px-6 py-3 mt-4 font-medium tracking-wide"
    href={action.url}
  >
    {action.label}
  </SmartLink>
);

const Card: FC<
  PropsWithChildren<{
    header?: ReactNode;
    dynamicCardImage?: DynamicCardImage;
    imageVariant?: ImageVariant;
    title?: ReactNode;
    subtitle?: string;
    additionalHeaderContent?: ReactNode | ReactNode[];
    body?: ReactNode;
    actions?: Action[];
    transparentBorder?: boolean;
    transparentBody?: boolean;
    bodyColor?: string;
  }>
> = ({
  children,
  header,
  dynamicCardImage,
  imageVariant,
  title,
  subtitle,
  additionalHeaderContent,
  body,
  actions,
  transparentBorder = false,
  transparentBody = false,
  bodyColor,
}) => (
  <section
    className={classNames(
      "border",
      {
        "border-transparent": transparentBorder,
        "bg-transparent": transparentBody,
        "bg-white": !transparentBody,
      },
      bodyColor,
    )}
    data-testid="card"
  >
    {header && header}
    {dynamicCardImage && (
      <div
        style={{
          backgroundColor: getBackgroundColor(),
          borderRadius: imageVariant === ImageVariant.circle ? "50%" : "none",
        }}
        className={
          imageVariant === ImageVariant.circle
            ? `m-4 min-w-[256px] w-1/2 min-h-[256px] h-1/2 p-1 mx-auto flex items-center justify-center`
            : ""
        }
      >
        <Image
          src={dynamicCardImage.image}
          alt={dynamicCardImage.alt}
          layout="responsive"
          loading="lazy"
          width={0}
          height={0}
          className={
            imageVariant === ImageVariant.circle ? `rounded-full w-1/2` : ""
          }
        />
      </div>
    )}
    <div className="m-4">
      <div className="text-center">
        {title && <h2 className="text-xl font-semibold">{title}</h2>}
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
        {additionalHeaderContent && <>{additionalHeaderContent}</>}
        {actions && <>{actions.map(createAction)}</>}
      </div>
      {body && <div className="mt-4">{body}</div>}
    </div>
    {children && <>{children}</>}
  </section>
);

export default Card;
