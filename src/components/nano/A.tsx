import React from 'react';
import Link from "next/link";
import router from "next/router";

interface AProps {
  href: string;
  type?: "btn" | "mailto" | "a" | "push";
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const A: React.FC<AProps> = ({ href, type, children, className = " ", onClick, style }) => {
  switch (type) {
    case undefined:
      return (
        <Link href={href} className={className} style={style}>
          {children}
        </Link>
      );
    case "btn":
      return (
        <Link href={href} className={className} style={style} role="button" onClick={onClick}>
          {children}
        </Link>
      );
    case "a":
      return (
        <a href={href} target="_blank" rel="noreferrer" className={className} style={style}>
          {children}
        </a>
      );
    case "push":
      router.push(href);
      return
    case "mailto":
      return (
        <a href={`mailto:${href}`} className={className} style={style}>
          {children}
        </a>
      );

  }
};

export default A;