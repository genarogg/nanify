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

    return (
        <div className="algolia-search">
            <InstantSearch indexName="movie" searchClient={searchClient}>

                <SearchBox />
                <Configure hitsPerPage={5} />
                <Hits hitComponent={Hit} />

                {query && (
                    <div className="hits-container">
                        <Hits hitComponent={Hit} />
                        {!hasResults && <NoResults />}
                    </div>
                )}
            </InstantSearch>
        </div>
    );
}

export default AlgoliaSearch;