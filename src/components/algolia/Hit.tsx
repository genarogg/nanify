import React from 'react'
import { A, Icon } from 'nanify';
import { IoFlash } from "react-icons/io5";
import style from './sass/_algolia.module.scss';

interface HitProps {
    hit: any;
    addRecentSearch: (title: string, url: string) => void;
}

const Hit: React.FC<HitProps> = ({ hit, addRecentSearch }) => {
    const handleClick = () => {
        addRecentSearch(hit.title, hit.url);
    };

    return (
        <div className={`${style.algoliaBox}`}>
            <Icon icon={<IoFlash />} className={style.boxOne} />
            <A
                className={style.boxTwo}
                type='btn'
                href={`/${hit.title}`}
                onClick={handleClick}
            >
                <h3>{hit.title}</h3>
            </A>
        </div>
    );
};

export default Hit;
