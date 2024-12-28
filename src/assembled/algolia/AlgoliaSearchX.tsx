"use client";

import React, { useState, useEffect, useRef } from "react";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch, Hits, useSearchBox } from "react-instantsearch";
import { ALGOLIA_ID, ALGOLIA_KEY } from "@env";
import { FaSearch } from "react-icons/fa";


if (!ALGOLIA_ID || !ALGOLIA_KEY) {
  throw new Error("Algolia credentials not provided");
}

const searchClient = algoliasearch(ALGOLIA_ID, ALGOLIA_KEY);

// Componente para renderizar los resultados
const Hit = ({ hit }: any) => (
  <div className="hit">
    <img
      src={hit.image || "/placeholder.png"}
      alt={hit.title || "No Image"}
      className="hit-image"
    />
    <div className="hit-content">
      <h3>{hit.title}</h3>
      <p>{hit.description}</p>
    </div>
  </div>
);

// Componente personalizado de SearchBox
const CustomSearchBox = () => {
  const { refine } = useSearchBox();
  const placeholders = [
    "Busca películas...",
    "¿Qué quieres ver hoy?",
    "Encuentra tus favoritas...",
    "Busca por género o título...",
  ];
  const typingSpeed = 150; // Velocidad de escritura en ms
  const pauseBetweenPhrases = 2000; // Pausa entre frases en ms

  const [placeholder, setPlaceholder] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let charIndex = 0;
    let phraseIndex = 0;
    let typingTimeout: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;

    const typePlaceholder = () => {
      if (!isTyping && inputRef.current) {
        const currentPhrase = placeholders[phraseIndex];
        if (charIndex < currentPhrase.length) {
          setPlaceholder((prev) => prev + currentPhrase[charIndex]);
          charIndex++;
          typingTimeout = setTimeout(typePlaceholder, typingSpeed);
        } else {
          pauseTimeout = setTimeout(() => {
            charIndex = 0;
            setPlaceholder("");
            phraseIndex = (phraseIndex + 1) % placeholders.length;
            typePlaceholder();
          }, pauseBetweenPhrases);
        }
      }
    };

    typePlaceholder();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [isTyping]);

  return (
    <div className="search-box">
      <FaSearch className="search-icon" />
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        onFocus={() => setIsTyping(true)} // Pausa animación
        onBlur={() => setIsTyping(false)} // Reanuda animación
        onChange={(e) => refine(e.target.value)} // Llama a refine para buscar
        className="search-input"
      />
    </div>
  );
};

const AlgoliaSearchX: React.FC = () => {
  return (
    <div className="algolia-search">
      <InstantSearch indexName="movie" searchClient={searchClient}>
        <CustomSearchBox />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  );
};

export default AlgoliaSearchX;
