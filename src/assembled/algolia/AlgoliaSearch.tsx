"use client";

import React, { useState } from "react";
import { liteClient as algoliasearch } from "algoliasearch/lite";

import { InstantSearch, Hits, Configure } from "react-instantsearch";
import { ALGOLIA_ID, ALGOLIA_KEY } from "@env";

import SearchBox from "./SearchBox";
import Hit from "./Hit";
import NoResults from "./NoResults";

if (!ALGOLIA_ID || !ALGOLIA_KEY) {
    throw new Error("Algolia credentials not provided");
}

const searchClient = algoliasearch(ALGOLIA_ID, ALGOLIA_KEY);

const AlgoliaSearch: React.FC = () => {
    const [query, setQuery] = useState("");
    const [hasResults, setHasResults] = useState(true);

    const handleQueryChange = (newQuery: string) => {
        setQuery(newQuery);
        setHasResults(newQuery.trim() !== ""); // Cambia según la lógica que determines.
    };

    return (
        <div className="algolia-search">
            <InstantSearch indexName="movie" searchClient={searchClient}>
                <SearchBox onQueryChange={handleQueryChange} />
                <Configure hitsPerPage={5} />
                {query && (
                    <>
                        <Hits hitComponent={Hit} />
                        {/* <NoResults />  */}
                    </>
                )}
            </InstantSearch>
        </div>
    );
};

export default AlgoliaSearch;
