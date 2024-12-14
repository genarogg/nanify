// src/components/nano/A.tsx
import Link from "next/link";
import router from "next/router";
var A = ({ href, type, children, className = " " }) => {
  if (!type) {
    return <Link href={href} className={className}>{children}</Link>;
  }
  switch (type) {
    case "mailto":
      return <a href={`mailto:${href}`} className={className}>{children}</a>;
    case "a":
      return <a href={href} target="_blank" rel="noreferrer" className={className}>{children}</a>;
    case "push":
      return router.push(href);
  }
};
var A_default = A;

export {
  A_default
};
