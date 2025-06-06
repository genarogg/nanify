import React from 'react'
import Header from "./Header"
import Footer from './Footer'
import "./sass/layout.scss"

interface LayoutProps {
    children: React.ReactNode;
    where?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    where="",
    header,
    footer
}) => {
    return (
        <div className={`containerAll example ${where}`}>
            {header ? header : <Header />}
            <main>
                {children}
            </main>
            {footer ? footer : <Footer />}
        </div>
    );
}

export default Layout;