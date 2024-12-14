import React from 'react';

interface BtnSubmitBasicProps {
    text: string;
    className?: string;
    id?: string;
    disable?: boolean;
    onClick?: () => void;
}
declare const BtnSubmitBasic: React.FC<BtnSubmitBasicProps>;

export { BtnSubmitBasic as default };
