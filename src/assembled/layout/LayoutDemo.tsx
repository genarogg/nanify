import React from 'react'
import LayoutMain from './LayoutMain';

interface LayoutDemoProps {

}

const LayoutDemo: React.FC<LayoutDemoProps> = () => {

    const Header = () => {
        return <header className='header-demo'><p>header</p></header>
    }
    const Footer = () => {
        return <footer className='footer-demo'><p>footer</p></footer>
    }

    return (
        <LayoutMain header={<Header />} footer={<Footer />}>
            <div className="main-demo">
                <p>hola mundo</p>
            </div>
        </LayoutMain >
    );
}

export default LayoutDemo;