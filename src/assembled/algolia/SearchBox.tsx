import React, { useState, useEffect, useRef } from "react";
import { useSearchBox } from "react-instantsearch";
interface SearchBoxProps {

}

const SearchBox: React.FC<SearchBoxProps> = () => {
    const { refine } = useSearchBox();
    const placeholders = [
        "xsBusca películas...",
        "x¿Qué quieres ver hoy?",
        "xEncuentra tus favoritas...",
        "xBusca por género o título...",
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
}

export default SearchBox;