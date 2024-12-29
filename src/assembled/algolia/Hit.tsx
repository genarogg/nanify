import React from 'react';
import { A } from "nanify";

// Definimos un tipo para las propiedades de hit
interface HitProps {
    hit: {
        title: string;
        url: string;
    };
    addRecentSearch: (title: string, url: string) => void; // Función para añadir búsqueda reciente
}

const Hit: React.FC<HitProps> = ({ hit, addRecentSearch }) => {
    const handleClick = () => {
        // Llamamos a la función para agregar a las búsquedas recientes
        addRecentSearch(hit.title, hit.url);
    };

    return (
        <div className="hit">
            <div className="hit-content">
                <A type='btn' href={`/${hit.url}`} onClick={handleClick}>
                    <h3>{hit.title}</h3>
                </A>
            </div>
        </div>
    );
}

export default Hit;
