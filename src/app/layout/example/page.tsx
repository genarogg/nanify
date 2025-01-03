import React from 'react'
import Layout from '../../../components/layout/layoutExample/Layout';

interface exampleProps {

}

const example: React.FC<exampleProps> = () => {
    return (<Layout><p>Children</p></Layout>);
}

export default example;