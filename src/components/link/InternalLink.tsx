import Link from 'next/link';
import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  to: string;
  className?: string | undefined;
};

const InternalLink: FC<Props> = ({ children, to, className }) => (
  <Link href={to} legacyBehavior>
    <a className={className}>{children}</a>
  </Link>
);

export default InternalLink;
