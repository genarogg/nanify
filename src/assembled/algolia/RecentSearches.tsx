import React from 'react';
import { Icon, A } from 'nanify';
import { TbReload } from "react-icons/tb";
import { IoTimerOutline } from "react-icons/io5";
import style from './sass/_algolia.module.scss';

interface SearchItem {
    title: string;
    url: string;
}

interface RecentSearchesProps {
    recentSearches: SearchItem[];
}

const RecentSearches: React.FC<RecentSearchesProps> = ({ recentSearches }) => {
    if (!recentSearches.length) return null;

    return (
        <div className={style.recentSearches}>
            <div className={`${style.title} ${style.algoliaBox}`}>
                <Icon icon={<IoTimerOutline />} className={style.boxOne} />
                <h3 className={style.boxTwo}>Búsquedas Recientes</h3>
            </div>
            <ul>
                {recentSearches.map((search) => (
                    <li key={search.url} className={style.algoliaBox}>

                        <Icon icon={<TbReload />} className={style.boxOne} />
                        <A
                            className={style.boxTwo}
                            type='btn'
                            href={`/${search.url}`}
                        >
                            <h3>{search.title}</h3>
                        </A>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentSearches;
