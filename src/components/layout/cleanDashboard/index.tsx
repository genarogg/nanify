import React from 'react'
import Header from "./header"
import Footer from './Footer'
import "./css/layout.scss"

import { Spinner } from '@/components/ux';
import SideBar from "./sidebar"

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
        <div className={`containerAll clean dashboard ${where}`}>
            {false ? (
                <Spinner />
            ) : (
                <>
                    {header ? header : <Header />}
                    <SideBar />
                    <div className="masterMain" id="masterMain">
                        <main>
                            {children}
                        </main>
                        {footer ? footer : <Footer />}
                    </div>
                </>
            )}
        </div>
    );
}

export default Layout;