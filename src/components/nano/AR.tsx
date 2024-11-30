import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface AProps {
  href: string;
  type?: string;
  children?: React.ReactNode;
  className?: string;
}

const A: React.FC<AProps> = ({ href, type, children, className = " " }) => {
  const navigate = useNavigate();

  if (!type) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }

  switch (type) {
    case "a":
      return (
        <a href={href} target="_blank" rel="noreferrer" className={className}>
          {children}
        </a>
      );

    case "push":
      navigate(href);
      return null;

    case "mailto":
      return (
        <a href={`mailto:${href}`} className={className}>
          {children}
        </a>
      );

    default:
      return null;
  }
};

export default A;