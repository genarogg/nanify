'use client'
import React from 'react'
import Layout from '@/OLD/layout/layoutExample/Layout'

interface pageProps {

}

const page: React.FC<pageProps> = () => {
    return (
        <Layout>

            <div className="main">
                <div className="left">Left</div>
                <div className="center">Center</div>
                <div className="right">Right</div>
            </div>

        </Layout>
    );
}

export default page;