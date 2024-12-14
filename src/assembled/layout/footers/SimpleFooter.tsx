import React from 'react'

interface SimpleFooterProps {
    text?: string;
}

const SimpleFooter: React.FC<SimpleFooterProps> = ({ text = "Con 💚 para latam" }) => {

    return (
        <footer className='simple-footer'>
            <div className="span"></div>
            <h2>{text}</h2>
            <div className="span"></div>
        </footer>
    );
}

export default SimpleFooter;