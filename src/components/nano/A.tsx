import React from 'react';
import Link from "next/link";
import router from "next/router";

interface AProps {
  href: string;
  type?: string;
  children?: React.ReactNode;
  className?: string;
}

const A: React.FC<AProps> = ({ href, type, children, className = " " }) => {

  if (!type) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  switch (type) {
    case "mailto":
      return (
        <a href={`mailto:${href}`} className={className}>
          {children}
        </a>
      );
    case "a":
      return (
        <a href={href} target="_blank" rel="noreferrer" className={className}>
          {children}
        </a>
      );
    case "push":
      return router.push(href);
  }
};

export default A;