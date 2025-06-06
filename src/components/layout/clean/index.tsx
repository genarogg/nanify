import React from 'react'
import Header from "./header"
import Footer from './Footer'
import "./sass/layout.scss"

import { Spinner } from '@ui';

interface LayoutProps {
    children: React.ReactNode;
    where?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    where = "",
    header,
    footer
}) => {
    return (
        <div className={`containerAll clean ${where}`}>
            {false ? (
                <Spinner />
            ) : (
                <>
                    {header ? header : <Header />}
                    <main>
                        {children}
                    </main>
                    {footer ? footer : <Footer />}
                </>
            )}
        </div >
    );
}

export default Layout;