import React from 'react'
import AlgoliaSearch from '@assembled/algolia/AlgoliaSearch';

interface algoliaProps {

}

const algolia: React.FC<algoliaProps> = () => {
    return (<AlgoliaSearch />);
}

export default algolia;