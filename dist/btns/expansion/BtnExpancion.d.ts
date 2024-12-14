import React from 'react';

interface BtnExpansionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}
declare const BtnExpansion: React.FC<BtnExpansionProps>;

export { BtnExpansion as default };
