import React from 'react';

interface BtnTextProps {
    text: string;
    onClick: () => void;
}
declare const BtnText: React.FC<BtnTextProps>;

export { BtnText as default };
