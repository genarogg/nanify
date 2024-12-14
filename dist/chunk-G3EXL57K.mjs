// src/components/gravatar/Gravatar.tsx
import md5 from "crypto-js/md5";
import Image from "next/image";

// src/functions/regexUtils.ts
var isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// src/components/gravatar/Gravatar.tsx
var Gravatar = ({
  email,
  alt,
  size = 80,
  className = ""
}) => {
  if (!isValidEmail(email)) {
    throw new Error("Invalid email");
  }
  const hash = md5(email.trim().toLowerCase());
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <Image
    src={url}
    alt={alt}
    width={size}
    height={size}
    priority
    className={className}
  />;
};
var Gravatar_default = Gravatar;

export {
  Gravatar_default
};
