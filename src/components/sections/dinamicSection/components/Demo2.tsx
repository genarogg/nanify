import React from 'react';
import { useAppContext } from '../AppContext';

const Demo2: React.FC = () => {
  const { setContext } = useAppContext();
  return (
    <div className="demo2-container">
      <h2 className="demo2-title">Demo 2</h2>
      <p className="demo2-text">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="demo2-button-container">
        <button className="demo2-button" onClick={() => setContext('demo1')}>Go to Demo 1</button>
        <button className="demo2-button" onClick={() => setContext('demo3')}>Go to Demo 3</button>
      </div>
    </div>
  );
};

export default Demo2;