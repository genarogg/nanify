

import React, { useState } from 'react'


import { ALGOLIA_ID, ALGOLIA_KEY } from "@env"
import Link from 'next/link';

console.log(ALGOLIA_ID, ALGOLIA_KEY);

if (!ALGOLIA_ID || !ALGOLIA_KEY) {
    throw new Error('Algolia credentials not provided');
}

const searchClient = algoliasearch(ALGOLIA_ID, ALGOLIA_KEY);


// const AlgoliaSearch = () => (
//     <InstantSearch
//     searchClient={searchClient}
//         indexName="YourIndexName"
//     >
//         <SearchBox />
//         <Hits />
//     </InstantSearch >
// );

// export default AlgoliaSearch;

/* const Results = connectStateResults(
    ({ searchState, searchResults, children }: any) =>
        searchResults && searchResults.nbHits !== 0 ? (
            children
        ) : (
            <div
                style={{
                    color: "#fc6380",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    padding: "0 15px",
                }}
            >
                No se encontraron resultados
            </div>
        )
); */

const Hit = ({ hit }: any) => {
    const urlCodificada = encodeURIComponent(hit.titulo);
    return (
        <div className="card-search">
            {/* Modificación aquí: se elimina el <a> y se mueve su contenido directamente dentro de <Link> */}
            <Link href={`/documentos/${urlCodificada}`}>
                <h2>{hit.titulo}</h2>
                <div
                    className="descripcion"
                    dangerouslySetInnerHTML={{
                        __html: hit.descripcion[0].children[0].text,
                    }}
                />
                <div className="footer">
                    {/* Otro Link modificado para eliminar el <a> innecesario */}
                    <Link href={`/documentos/${urlCodificada}`}>ver publicacion</Link>
                </div>
            </Link>
        </div>
    );
};

interface AlgoliaSearchProps { }

const AlgoliaSearch: React.FC<AlgoliaSearchProps> = () => {
    const [searchEnabled, setSearchEnabled] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="algolia">
            <InstantSearch
                searchClient={searchClient}
                indexName="production_api::trabajo.trabajo"
            >
                <SearchBox
                    onChange={(event) => {
                        const query = event.currentTarget.value;
                        setSearchQuery(query);
                        if (query.trim() !== "") setSearchEnabled(true);
                        else setSearchEnabled(false);
                    }}
                    translations={{ placeholder: "Buscar trabajo" }}
                />
                {searchEnabled && searchQuery.trim() !== "" && (
                    <div className="container-result">
                        <Results>
                            <Hits hitComponent={Hit} />
                        </Results>
                    </div>
                )}
            </InstantSearch>
        </div>
    );
};

export default AlgoliaSearch;


