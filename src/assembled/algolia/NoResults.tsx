import React from 'react'

interface NoResultsProps {

}

const NoResults: React.FC<NoResultsProps> = () => {
    return (
        <>
            <div className="no-results">
                <p>No se encontraron resultados</p>
            </div>
        </>

    );
}

export default NoResults;