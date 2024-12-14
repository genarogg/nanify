import React from 'react';

interface LayoutMainProps {
    header: React.ReactNode;
    children: React.ReactNode;
    footer: React.ReactNode;
}
declare const LayoutMain: React.FC<LayoutMainProps>;

export { LayoutMain as default };
