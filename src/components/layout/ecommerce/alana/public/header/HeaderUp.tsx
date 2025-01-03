import React from 'react'
import { A } from 'nanify';
import AlgoliaSearch from '../../../../../algolia/AlgoliaSearch';
import Nav from '../../../../nav/Nav';

interface HeaderUpProps {
    logo: any
    nav: any
    login: boolean;
}
const HeaderUp: React.FC<HeaderUpProps> = ({ logo, nav, login }) => {
    return (
        <>
            <div className="headerUp">
                <div className="logo">
                    <A href={logo.href} >
                        {logo.logo}
                    </A>
                </div>
                <div className="search">
                    <AlgoliaSearch
                        className='algolia'
                        styleSearchBox={"searchBox"}
                    />
                </div>
                <div className="user">
                    {login ?
                        <Nav
                            menuItems={nav} className='sign-up' />
                        : <p>icons</p>}
                </div>
            </div>
        </>
    );
}

export default HeaderUp;