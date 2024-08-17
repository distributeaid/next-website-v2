import React, { AnchorHTMLAttributes, FC } from "react";

const ExternalLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  ...otherProps
}) => <a rel="noopener noreferrer" target="_blank" {...otherProps} />;

export default ExternalLink;
