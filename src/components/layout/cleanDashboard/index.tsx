import React from 'react'
import Header from "./header"
import Footer from './Footer'
import "./css/layout.scss"

import { Spinner } from '@/components/ux';
// import { useAuth } from '@/OLD/context/AuthContext';

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

    // const { state: { loading } } = useAuth();

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
        </div>
    );
}

export default Layout;