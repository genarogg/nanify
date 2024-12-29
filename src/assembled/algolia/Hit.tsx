import React from 'react'
import { A } from "nanify"

interface HitProps {
    hit: any;
}

const Hit: React.FC<HitProps> = ({ hit }) => {
    const handleClick = () => {
        const recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
        recentSearches.push({ title: hit.title, url: hit.url });
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    };

    return (
        <>
            <div className="hit">
                <div className="hit-content">
                    <A type='btn' href={`/${hit.url}`} onClick={handleClick}>
                        <h3>{hit.title}</h3>
                    </A>
                </div>
            </div>
        </>
    );
}

export default Hit;