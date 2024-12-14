import React from 'react';

interface BtnRowCircleProps {
    icon?: React.ReactNode;
    id?: string;
    onClick: () => void;
}
declare const BtnRowCircle: React.FC<BtnRowCircleProps>;

export { BtnRowCircle as default };
