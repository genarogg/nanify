import React from 'react'

interface BtnFreyaProps {
    fn?: () => void;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
    isActive: boolean;
    className?: string;
}

const BtnFreya: React.FC<BtnFreyaProps> = ({
    fn,
    isActive,
    setIsActive,
    className = "",
}) => {
    return (
        <button
            onClick={() => {
                setIsActive(!isActive);
                fn && fn();
            }}
            className={`btn-freya ${className} ${isActive ? "active" : ""}`}
        >
            <span></span>
        </button>
    );
};

export default BtnFreya;