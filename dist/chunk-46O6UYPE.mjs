import {
  Icon_default
} from "./chunk-W7EUYV3T.mjs";

// src/components/form/Input.tsx
import { useState, useRef, useEffect } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
var Input = ({
  className = "",
  icon,
  name,
  id = name,
  type,
  required = true,
  disabled = false,
  min,
  max,
  hasContentState = false,
  placeholder,
  onChange
}) => {
  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };
  const [isFocused, setIsFocused] = useState(false);
  const [inputType, setInputType] = useState(type);
  const [hasContent, setHasContent] = useState(hasContentState);
  const inputRef = useRef(null);
  const handleClick = () => {
    if (type === "date" && inputRef.current) {
      inputRef.current.showPicker();
    }
  };
  const handleChange = (e) => {
    setHasContent(e.target.value !== "");
    if (onChange) {
      onChange(e);
    }
  };
  useEffect(() => {
    if (inputRef.current) {
      setHasContent(inputRef.current.value !== "");
    }
  }, []);
  return <div
    className={`container-input ${className} ${isFocused ? "focus" : ""} ${icon ? "" : "no-icon"}`}
    onClick={handleClick}
  >
    {
      /* icono */
    }
    {icon && <label htmlFor={id} className="label-ico"><Icon_default icon={icon} /></label>}
    {
      /* input */
    }
    <input
      ref={inputRef}
      type={inputType}
      name={name}
      id={id}
      required={required}
      disabled={disabled}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChange={handleChange}
      {...min ? { min } : {}}
      {...max ? { max } : {}}
    />
    {
      /* mostrar el password */
    }
    {type === "password" && <button
      className="view-pass"
      type="button"
      onClick={togglePasswordVisibility}
    >{inputType === "password" ? <label><Icon_default icon={<FaRegEye />} /></label> : <label><Icon_default icon={<FaRegEyeSlash />} /></label>}</button>}
    {
      /* placehorder */
    }
    <span className={`holder ${hasContent ? "has-content" : ""}`}>{placeholder}</span>
  </div>;
};
var Input_default = Input;

export {
  Input_default
};
