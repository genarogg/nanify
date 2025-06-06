
'use client'
import React from 'react'
import Layout from '@components/layout/clean';
    
interface cleanLayoutProps {
    
}
 
const cleanLayout: React.FC<cleanLayoutProps> = () => {
    return (
        <Layout>
            <p>clean Layout</p>
        </Layout> 
     );
}
 
export default cleanLayout;