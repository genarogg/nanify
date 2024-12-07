import React from 'react'
import LayoutMain from '@components/layout/LayoutMain';
import SimpleFooter from '@components/layout/footers/SimpleFooter';

interface simpleFooterProps {

}

const simpleFooter: React.FC<simpleFooterProps> = () => {

    const Header = () => {
        return <header className='header-demo'><p>header</p></header>
    }
    // const Footer = () => {
    //     return <footer className='footer-demo'><p>footer</p></footer>
    // }

    return (
        <LayoutMain header={<Header />} footer={<SimpleFooter />}>
            <div className="main-demo">
                <p>hola mundo</p>
            </div>
        </LayoutMain >
    );
}

export default simpleFooter;