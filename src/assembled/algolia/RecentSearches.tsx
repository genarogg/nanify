import React from 'react';

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
            <h4>Búsquedas Recientes</h4>
            <ul>
                {recentSearches.map((search, index) => (
                    <li key={index}>
                        <a href={`/${search.url}`}>
                            {search.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentSearches;