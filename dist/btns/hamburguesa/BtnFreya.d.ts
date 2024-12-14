import React from 'react';

interface BtnFreyaProps {
    fn?: () => void;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
    isActive: boolean;
    className?: string;
}
declare const BtnFreya: React.FC<BtnFreyaProps>;

export { BtnFreya as default };
