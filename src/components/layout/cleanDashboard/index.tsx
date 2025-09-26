import React from 'react'
import Header from "./header"
import Footer from './Footer'
import "./css/layout.scss"

import { Spinner } from '@/components/ux';
import SideBar from "./sidebar"

import useIsInRange from "@/hook/useIsInRange"
import useIsLargeScreen from "@/hook/useIsLargeScreen"
import { $classList } from "@/functions"


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

    // const isSmall = useIsInRange({ min: 0, max: 800 });
    // const isMedium = useIsInRange({ min: 800, max: 1200 });
    // const isLarge = useIsLargeScreen({ dimension: 1200 });

    // if (isSmall) {
    //     $classList("container-aside")?.add("active")
    //     $classList("masterMain")?.add("active")
    //     console.log("isSmall")
    // } else if (isMedium) {
    //     $classList("container-aside")?.add("active")
    //     $classList("masterMain")?.add("active")
    // } else if (isLarge) {

    // }

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