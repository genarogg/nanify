import React from 'react';

interface BtnThorProps {
    fn?: () => void;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
    isActive: boolean;
    className?: string;
}
declare const BtnThor: React.FC<BtnThorProps>;

export { BtnThor as default };
