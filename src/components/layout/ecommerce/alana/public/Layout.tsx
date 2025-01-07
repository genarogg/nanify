import React from 'react'
import Header from "./header/Header"
import Footer from './footer/Footer'
import style from "./sass/layout.module.scss"



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
        <div className={`${where} ${style.containerAll}`}>
            {header ? header : <Header />}
            <main>
                {children}
            </main>
            {footer ? footer : <Footer />}
        </div>
    );
}

export default Layout;