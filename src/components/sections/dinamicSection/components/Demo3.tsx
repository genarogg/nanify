import React from 'react';
import { useAppContext } from '../AppContext';

const Demo3: React.FC = () => {
    const { setContext } = useAppContext();
    return (
        <div className="demo3-container">
            <h2 className="demo3-title">Demo 3</h2>
            <p className="demo3-text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="demo3-button-container">
                <button className="demo3-button" onClick={() => setContext('demo1')}>Go to Demo 1</button>
                <button className="demo3-button" onClick={() => setContext('demo2')}>Go to Demo 2</button>
            </div>
        </div>
    );
};

export default Demo3;
