import React from 'react'
import Layout from '@assembled/layout/layoutExample/Layout';

interface exampleProps {

}

const example: React.FC<exampleProps> = () => {
    return (<Layout><p>Children</p></Layout>);
}

export default example;