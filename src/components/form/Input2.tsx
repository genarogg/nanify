import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import { Icon } from "@nano";

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    value: string | number | boolean;
    valueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    icon?: React.ReactNode;
    hasContentState?: boolean;
    max?: number;
    min?: number;
    required?: boolean;
    disabled?: boolean;
    className?: string;
}

const Input: React.FC<InputProps> = ({
    type,
    name,
    id = name,
    placeholder,
    icon,
    value,
    valueChange,
    hasContentState = false,
    min,
    max,
    required = true,
    disabled = false,
    className = "",
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasContent, setHasContent] = useState(hasContentState);
    const [inputType, setInputType] = useState(type);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHasContent(event.target.value !== "");
        valueChange(event);
    };

    const togglePasswordVisibility = () => {
        setInputType(inputType === "password" ? "text" : "password");
    };

    return (
        <div
            className={`container-input ${className} ${isFocused ? "focus" : ""} ${icon ? "" : "no-icon"
                }`}
        >
            {icon && (
                <label htmlFor={id}>
                    <Icon icon={icon} />
                </label>
            )}

            <input
                type={inputType}
                name={name}
                required={required}
                disabled={disabled}
                id={id}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleInputChange}
                value={value as string | number | readonly string[] | undefined}
                {...(min ? { min } : {})}
                {...(max ? { max } : {})}
            />

            {type === "password" && (
                <button
                    className="view-pass"
                    type="button"
                    onClick={togglePasswordVisibility}
                >
                    {inputType === "password" ? (
                        <label>
                            <Icon icon={<FaRegEye />} />
                        </label>
                    ) : (
                        <label>
                            <Icon icon={<FaRegEyeSlash />} />
                        </label>
                    )}
                </button>
            )}
            <span className={`holder ${hasContent ? "has-content" : ""}`}>
                {placeholder}
            </span>
        </div>
    );
};

export default Input;
