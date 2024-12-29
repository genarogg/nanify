"use client";

import React, { useState, useEffect } from "react";
import { algoliasearch } from "algoliasearch";
import RecentSearches from "./RecentSearches";
import { InstantSearch, Hits, Configure } from "react-instantsearch";
import { AnimatePresence, motion } from "framer-motion";

import { ALGOLIA_ID, ALGOLIA_KEY } from "@env";

import SearchBox from "./SearchBox";
import Hit from "./Hit";
import NoResults from "./NoResults";

if (!ALGOLIA_ID || !ALGOLIA_KEY) {
    throw new Error("Algolia credentials not provided");
}

// Configuración del cliente completo
const searchClient = algoliasearch(ALGOLIA_ID, ALGOLIA_KEY);

const AlgoliaSearch: React.FC = () => {
    const [query, setQuery] = useState("");
    const [hasResults, setHasResults] = useState(true);
    const [recentSearches, setRecentSearches] = useState<{ title: string; url: string }[]>([]);

    const handleQueryChange = (newQuery: string) => {
        setQuery(newQuery);
        setHasResults(newQuery.trim() !== "");
    };

    const searchRecent = () => {
        const storedSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
        setRecentSearches(storedSearches);
    }

    return (
        <div className="algolia-search" onClick={searchRecent}>
            <InstantSearch indexName="movie" searchClient={searchClient}>
                {/* Barra de búsqueda */}
                <SearchBox onQueryChange={handleQueryChange} />
                <Configure hitsPerPage={5} />

                {/* Contenedor de resultados con animaciones */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ height: query ? "auto" : "0px" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                >
                    <AnimatePresence>
                        {/* Resultados encontrados */}
                        {query && hasResults && (
                            <motion.div
                                key="results"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Hits hitComponent={Hit} />
                            </motion.div>
                        )}

                        {/* Sin resultados */}
                        {query && !hasResults && (
                            <motion.div
                                key="no-results"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <NoResults />
                            </motion.div>
                        )}

                        {recentSearches.length > 0 && (
                            <RecentSearches recentSearches={recentSearches} />
                        )}
                    </AnimatePresence>
                </motion.div>
            </InstantSearch>
        </div>
    );
};

export default AlgoliaSearch;
