import React from 'react'

interface HitProps {
    hit: any;
}

const Hit: React.FC<HitProps> = ({hit}) => {
    return (
        <>
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
        </>
    );
}

export default Hit;