import React from 'react'
import { Icon, A } from 'nanify';
import AlgoliaSearch from '../../../../../algolia/AlgoliaSearch';
import Nav from '../../../../nav/Nav';

interface HeaderUpProps {
    logo: any
    navOuth: any
    navLogin: any
    login: boolean;
}
const HeaderUp: React.FC<HeaderUpProps> = ({ logo, navOuth, navLogin, login }) => {
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
                            menuItems={navOuth} className='sign-in'
                        />
                        :
                        <Nav
                            menuItems={navLogin} className='sign-login'
                        />
                    }
                </div>
            </div>
        </>
    );
}

export default HeaderUp;