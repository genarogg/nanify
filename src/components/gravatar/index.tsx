import React from "react";
import md5 from "crypto-js/md5";
import { isValidEmail } from "@fn";

interface GravatarProps {
  email: string;
  alt: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Gravatar: React.FC<GravatarProps> = ({
  email,
  alt,
  size = 80,
  className = "",
  style = {},
}) => {
  if (!isValidEmail(email)) {
    throw new Error("Invalid email");
  }

  const hash = md5(email.trim().toLowerCase());
  const url = `https://www.gravatar.com/avatar/${hash}`;

  return (
    <img
      src={url}
      alt={alt}
      width={size}
      height={size}
      className={className}
      style={style}
    />
  );
};

export default Gravatar;
