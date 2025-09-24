'use client'
import React from 'react'
import './LayoutDocs.css'
import Aside from './Aside'

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
        </div>
    )
}

export default LayoutDocs
