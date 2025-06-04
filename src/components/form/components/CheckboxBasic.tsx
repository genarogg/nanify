"use client";
import React, { useState, useImperativeHandle } from "react";
import { Icon } from "@ui";
import { FaSquareCheck } from "react-icons/fa6";
import { ImCheckboxUnchecked } from "react-icons/im";

interface CheckBoxBasicProps {
  text: string;
  onClick?: () => void;
  ref?: React.Ref<{ isChecked: boolean }>;
}

const CheckBoxBasic = ({ text, onClick, ref }: CheckBoxBasicProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setIsClicked(!isClicked);
    onClick && onClick();

    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 500);
  };

  useImperativeHandle(ref, () => ({
    isChecked: isClicked,
  }));

  return (
    <div className="checkbox-basic" onClick={handleClick}>
      {isClicked ? (
        <Icon
          icon={<FaSquareCheck />}
          className={isAnimating ? "animate-check" : ""}
        />
      ) : (
        <Icon
          icon={<ImCheckboxUnchecked />}
          className={isAnimating ? "animate-uncheck" : ""}
        />
      )}
      <span className="text">{text}</span>
    </div>
  );
};

export default CheckBoxBasic;