import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from './AppContext';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import Demo3 from './components/Demo3';

const MainContent: React.FC = () => {
    const { context } = useAppContext();

    const renderComponent = () => {
        switch (context) {
            case 'demo1':
                return <Demo1 />;
            case 'demo2':
                return <Demo2 />;
            case 'demo3':
                return <Demo3 />;
            default:
                return <Demo1 />;
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={context}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {renderComponent()}
            </motion.div>
        </AnimatePresence>
    );
};

export default MainContent;