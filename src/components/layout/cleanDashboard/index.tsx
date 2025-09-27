import React, { useState, useEffect } from 'react'
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
    contentKey?: string;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    where = "",
    header,
    footer,
    contentKey = "default"
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [currentContent, setCurrentContent] = useState(children);
    const [previousContentKey, setPreviousContentKey] = useState(contentKey);

    useEffect(() => {
        if (contentKey !== previousContentKey) {
           
            setIsVisible(false);

            setTimeout(() => {
                setCurrentContent(children);
                setPreviousContentKey(contentKey);
                setIsVisible(true);
            }, 200);
        } else {
            setCurrentContent(children);
        }
    }, [children, contentKey, previousContentKey]);

    return (
        <div className={`containerAll clean dashboard ${where}`}>
            {false ? (
                <Spinner />
            ) : (
                <>
                    {header ? header : <Header />}
                    <SideBar />
                    <div className="masterMain" id="masterMain">
                        <main
                            className={`fade-content ${isVisible ? 'fade-in' : 'fade-out'}`}
                            style={{
                                transition: 'opacity 0.2s ease-in-out',
                                opacity: isVisible ? 1 : 0
                            }}
                        >
                            {currentContent}
                        </main>
                        {footer ? footer : <Footer />}
                    </div>
                </>
            )}
        </div>
    );
}

export default Layout;