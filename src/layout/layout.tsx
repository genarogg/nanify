'use client'
import React from 'react'
import './LayoutDocs.css'
import Aside from './Aside'
import { Toaster } from 'sonner'
import 'sonner/dist/styles.css';

interface LayoutDocsProps {
    children: React.ReactNode
}

const LayoutDocs: React.FC<LayoutDocsProps> = ({ children }) => {
    return (
        <div className="layout-container">
            <header className="layout-header">Header</header>

            <div className="layout-body">
                <Aside />
                <main className="layout-main">{children}</main>
            </div>
            <footer className="layout-footer">Footer</footer>
            <Toaster
                position="bottom-center"
                richColors={true}
                theme="light"
                expand={false}
                visibleToasts={4}
            />
        </div>
    )
}

export default LayoutDocs
