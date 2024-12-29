"use client";

import React, { useState } from "react";
import { algoliasearch } from "algoliasearch"; // Cambiar a importación por destructuración
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

    const handleQueryChange = (newQuery: string) => {
        setQuery(newQuery);
        setHasResults(newQuery.trim() !== "");
    };

    return (
        <div className="algolia-search">
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
                    </AnimatePresence>
                </motion.div>
            </InstantSearch>
        </div>
    );
};

export default AlgoliaSearch;
