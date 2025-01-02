"use client";

import React, { useReducer } from "react";
import { algoliasearch } from "algoliasearch";
import { Hits, Configure } from "react-instantsearch";
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import RecentSearches from "./RecentSearches";
import { AnimatePresence, motion } from "framer-motion";
import style from "./sass/_algolia.module.scss";

import { ALGOLIA_ID, ALGOLIA_KEY } from "@env";

import SearchBox from "./SearchBox";
import Hit from "./Hit";

// Importar el reducer y el estado inicial
import { searchReducer, initialState } from "./searchReducer";

if (!ALGOLIA_ID || !ALGOLIA_KEY) {
    throw new Error("Algolia credentials not provided");
}

// Configuración del cliente completo
const searchClient = algoliasearch(ALGOLIA_ID, ALGOLIA_KEY);

const AlgoliaSearch: React.FC = () => {
    const [state, dispatch] = useReducer(searchReducer, initialState);

    const handleQueryChange = (newQuery: string) => {
        dispatch({ type: "SET_QUERY", payload: newQuery });
    };

    const searchRecent = () => {
        const storedSearches = JSON.parse(localStorage.getItem("recentSearches") || "[]");
        dispatch({ type: "SET_RECENT_SEARCHES", payload: storedSearches });
    };

    const addRecentSearch = (title: string, url: string) => {
        const newSearch = { title, url };

        // Obtener búsquedas actuales desde localStorage
        const storedSearches: { title: string; url: string }[] =
            JSON.parse(localStorage.getItem("recentSearches") || "[]");

        // Filtrar duplicados
        const filteredSearches = storedSearches.filter(search => search.title !== title);

        // Agregar el nuevo elemento y limitar a 5 
        const updatedSearches = [newSearch, ...filteredSearches].slice(0, 5);

        // Actualizar estado y localStorage
        dispatch({ type: "SET_RECENT_SEARCHES", payload: updatedSearches });
        localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    };

    return (
        <div className={style.algoliaSearch} onClick={searchRecent}>
          <InstantSearchNext indexName="movie" searchClient={searchClient}>
            <SearchBox onQueryChange={handleQueryChange} />
            <Configure hitsPerPage={5} />
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ height: state.query ? 'auto' : '0px' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <AnimatePresence>
                {state.query && state.hasResults && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Hits
                      hitComponent={(hitProps) => (
                        <Hit {...hitProps} addRecentSearch={addRecentSearch} />
                      )}
                    />
                  </motion.div>
                )}
                {state.recentSearches.length > 0 && (
                  <RecentSearches recentSearches={state.recentSearches} />
                )}
              </AnimatePresence>
            </motion.div>
          </InstantSearchNext>
        </div>
      );
};

export default AlgoliaSearch;
