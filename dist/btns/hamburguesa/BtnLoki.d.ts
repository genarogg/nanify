import React from 'react';

interface BtnLokiProps {
    fn?: () => void;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
    isActive: boolean;
    className?: string;
}
declare const BtnLoki: React.FC<BtnLokiProps>;

export { BtnLoki as default };
