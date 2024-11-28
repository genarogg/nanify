import React from "react";
import md5 from "crypto-js/md5";
import Image from "next/image";

import { isValidEmail } from "@fn/regexUtils";

interface GravatarProps {
  email: string;
  alt: string;
  size?: number;
  className?: string;
}

const Gravatar: React.FC<GravatarProps> = ({
  email,
  alt,
  size = 80,
  className = " ",

}) => {
  if (!isValidEmail(email)) {
    throw new Error("Invalid email");
  }

  const hash = md5(email.trim().toLowerCase());
  const url = `https://www.gravatar.com/avatar/${hash}`;

  return (
    <Image
      src={url}
      alt={alt}
      width={size}
      height={size}
      priority
      className={className}
    />
  );
};

export default Gravatar;
