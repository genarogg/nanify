import React from 'react'

interface LayoutMainProps {
    header: React.ReactNode;
    children: React.ReactNode;
    footer: React.ReactNode;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ header, children, footer }) => {
    return (
        <div className="layout-main">
            {header}
            <main>
                {children}
            </main>
            {footer}
        </div>
    );
}

export default LayoutMain;