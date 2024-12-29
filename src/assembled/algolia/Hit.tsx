import React from 'react'
import { A } from 'nanify';

interface HitProps {
    hit: any;
    addRecentSearch: (title: string, url: string) => void;
}

const Hit: React.FC<HitProps> = ({ hit, addRecentSearch }) => {
    const handleClick = () => {

        if (hit.title && hit.url) {
            addRecentSearch(hit.title, hit.url);
        }
    };

    return (
        <div className="hit">
            <div className="hit-content">
                <div className="hit">
                    <div className="hit-content">
                        <A type='btn' href={`/${hit.url}`} onClick={handleClick}>
                            <h3>{hit.title}</h3>
                        </A>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hit;
