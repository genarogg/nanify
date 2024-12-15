import React from 'react';
import Link from "next/link";
import router from "next/router";

interface AProps {
  href: string;
  type?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const A: React.FC<AProps> = ({ href, type, children, className = " ", style }) => {
  switch (type) {
    case undefined:
      return (
        <Link href={href} className={className} style={style}>
          {children}
        </Link>
      );
    case "mailto":
      return (
        <a href={`mailto:${href}`} className={className} style={style}>
          {children}
        </a>
      );
    case "a":
      return (
        <a href={href} target="_blank" rel="noreferrer" className={className} style={style}>
          {children}
        </a>
      );
    case "push":
      router.push(href);
      return null;
  }
};

export default A;