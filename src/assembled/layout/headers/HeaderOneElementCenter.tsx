import React from 'react'

interface HeaderOneElementCenterProps {
    text: string;
}

const HeaderOneElementCenter: React.FC<HeaderOneElementCenterProps> = ({ text }) => {
    return (
        <header className='header-one-element-center'>
            <h2>{text}</h2>
        </header>
    );
}

export default HeaderOneElementCenter;