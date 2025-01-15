'use client'
import React from 'react'
    

interface AgLayoutProps {
    titulo: string;
    children: React.ReactNode;
    btns?: React.ReactNode;
    search?: React.ReactNode;
}

const AgLayout: React.FC<AgLayoutProps> = ({ titulo, children, btns, search }) => {
    return (
        <>
            <div className="layout-tablet-container">
                <div className="conteiner">
                    <div className="container-header">
                        <h3>{titulo}</h3>
                        {search && <div className="search">{search}</div>}
                        {btns && <div className="btns">{btns}</div>}
                    </div>
                    <div className="contenido-body">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AgLayout;