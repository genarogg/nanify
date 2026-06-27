'use client'
import React from 'react'
import Search from "./Search"
import Filter from "./filters"



interface HeaderDownProps { }

const HeaderDown: React.FC<HeaderDownProps> = () => {
    return (
        <div className="table-header-controls-section">
            <div className="box-left">
                <Search />
            </div>
            <div className="box-right">
                <Filter />
                <div className="modal-button-wrapper">
        
                </div>
            </div>
        </div>
    );
}

export default HeaderDown;