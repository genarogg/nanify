import React from 'react'
import LayoutMain from '@assembled/layout/LayoutMain';
import HeaderOneElementCenter from "@assembled/layout/headers/HeaderOneElementCenter"

interface headerOneElementCenterProps {

}

const headerOneElementCenter: React.FC<headerOneElementCenterProps> = () => {

    // const Header = () => {
    //     return <header className='header-demo'><p>header</p></header>
    // }
    const Footer = () => {
        return <footer className='footer-demo'><p>footer</p></footer>
    }

    return (
        <LayoutMain header={<HeaderOneElementCenter text="GenaroGG" />} footer={<Footer />}>
            <div className="main-demo">
                <p>hola mundo</p>
            </div>
        </LayoutMain >
    );
}

export default headerOneElementCenter;