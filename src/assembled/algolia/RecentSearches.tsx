import React from 'react';
import { Icon, A } from 'nanify';
import { TbReload } from "react-icons/tb";
import { IoTimerOutline } from "react-icons/io5";


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
        <div className="recent-searches">
            <div className="title algolia-box">
                <Icon icon={<IoTimerOutline />} className="box-one" />
                <h3 className="box-two">Búsquedas Recientes</h3>
            </div>
            <ul>
                {recentSearches.map((search) => (
                    <li key={search.url} className='algolia-box'>
                        <>
                            <Icon icon={<TbReload />} className="box-one" />
                            <A
                                className="box-two"
                                type='btn'
                                href={`/${search.url}`}
                            >
                                <h3> {search.title}</h3>
                            </A>
                        </>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentSearches;
