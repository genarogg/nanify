import React from 'react';
import { AppProvider, useAppContext } from './AppContext';
import MainContent from './MainComponent';
import './components/_styles.scss';

const App: React.FC = () => (
    <AppProvider>
        <div className="app">
            <Switcher />
            <MainContent />
        </div>
    </AppProvider>
);

const Switcher: React.FC = () => {
    const { context, setContext } = useAppContext();
    return (
        <div className="switcher-container">
            {['demo1', 'demo2', 'demo3'].map((demo) => (
                <button
                    key={demo}
                    onClick={() => setContext(demo)}
                    className={`switcher-button ${context === demo ? 'active' : ''}`}
                >
                    {demo}
                </button>
            ))}
        </div>
    );
};

export default App;
