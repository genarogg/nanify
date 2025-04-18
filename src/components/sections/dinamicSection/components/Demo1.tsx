import React from 'react';
import { useAppContext } from '../AppContext';

const Demo1: React.FC = () => {
    const { setContext } = useAppContext();
    return (
        <div className="demo1-container">
            <h2 className="demo1-title">Demo 1</h2>
            <p className="demo1-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="demo1-button-container">
                <button className="demo1-button" onClick={() => setContext('demo2')}>Go to Demo 2</button>
                <button className="demo1-button" onClick={() => setContext('demo3')}>Go to Demo 3</button>
            </div>
        </div>
    );
};

export default Demo1;