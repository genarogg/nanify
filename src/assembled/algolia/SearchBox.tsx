import React, { useState, useEffect, useRef } from "react";
import { useSearchBox } from "react-instantsearch";

interface SearchBoxProps {
    onQueryChange: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onQueryChange }) => {
    const { refine } = useSearchBox();
    const placeholders = [
        "Busca tu estilo perfecto...",
        "¿Qué prenda estás buscando hoy?",
        "Descubre tus favoritos...",
        "Busca por categoría o tendencia...",
    ];
    const typingSpeed = 150;
    const pauseBetweenPhrases = 2000;

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
                    const nextChar = currentPhrase[charIndex];
                    if (nextChar !== undefined) {
                        setPlaceholder(currentPhrase.slice(0, charIndex + 1));
                        charIndex++;
                        typingTimeout = setTimeout(typePlaceholder, typingSpeed);
                    }
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        refine(value);
        onQueryChange(value);
    };

    return (
        <div className="search-box">
            <input
                ref={inputRef}
                type="text"
                placeholder={placeholder}
                onFocus={() => setIsTyping(true)}
                onBlur={() => setIsTyping(false)}
                onChange={handleInputChange}
                className="search-input"
            />
        </div>
    );
};

export default SearchBox;
