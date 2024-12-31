import React from 'react'
import AlgoliaSearch from '@assembled/algolia/AlgoliaSearch';

interface algoliaProps {

}

const algolia: React.FC<algoliaProps> = () => {
    return (<><AlgoliaSearch /><p>hola</p></>);
}

export default algolia;