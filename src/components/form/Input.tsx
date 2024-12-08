import React, { useState } from 'react'
import { Icon } from '@nano'

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

interface InputProps {
    className?: string;
    name: string;
    type: string;

    icon?: React.ReactNode;
    id?: string;
    required?: boolean;
    disabled?: boolean;

    max?: number;
    min?: number;

    hasContentState?: boolean;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({
    className = " ",
    icon,
    name,
    id = name,
    type,
    required = true,
    disabled = false,
    min,
    max,
    hasContentState = false,
    placeholder
}) => {

    const togglePasswordVisibility = () => {
        setInputType(inputType === "password" ? "text" : "password");
    };

    const [isFocused, setIsFocused] = useState(false);
    const [inputType, setInputType] = useState(type);
    const [hasContent, setHasContent] = useState(hasContentState);

    return (
        <div
            className={`
                    container-input 
                    ${className}
                    ${isFocused ? "focus" : ""}
                    ${icon ? "" : "no-icon"}
                    `}>

            {/* icono */}
            {icon && (
                <label htmlFor={id}>
                    <Icon icon={icon} />
                </label>
            )}

            {/* input */}
            <input
                type={inputType}
                name={name}
                id={id}
                required={required}
                disabled={disabled}

                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}

                {...(min ? { min } : {})}
                {...(max ? { max } : {})}
            />
            {/* mostrar el password */}
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

            {/* placehorder */}
            <span className={`holder ${hasContent ? "has-content" : ""}`}>
                {placeholder}
            </span>
        </div>
    );
}

export default Input;