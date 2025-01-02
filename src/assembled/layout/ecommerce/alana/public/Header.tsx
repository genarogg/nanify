import React from 'react'
import { LogoGenarogg } from 'nanify';
import AlgoliaSearch from '@assembled/algolia/AlgoliaSearch';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {

    const login = true
    return (
        <header>
            <div className="headerUp">
                <div className="logo">
                    <LogoGenarogg />
                </div>
                <div className="search">
                    <AlgoliaSearch
                        className='algolia'
                        styleSearchBox={"searchBox"}
                    />
                </div>
                <div className="user">
                    {login ? <p>login</p> : <p>icons</p>}
                </div>
            </div>
        </header>
    );
}

export default Header;