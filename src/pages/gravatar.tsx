import React from 'react';
import Gravatar from "@gravatar"

interface gravatarProps { }

const gravatar: React.FC<gravatarProps> = () => {
    return (
        <>
            <h1>Documentación</h1>
            <p>Esta página documenta varios componentes y funciones utilizados en el proyecto.</p>

            <h2>Components</h2>

            <h3>Gravatar</h3>
            <p>Componente Gravatar</p>
            <Gravatar email="genarrogg@gmail.com" alt='genaro gonzalez'/>
            <br />
            Uso del componente <code>{'<Gravatar email="genarrogg@gmail.com" alt="genaro gonzalez"/>'}</code> 
            <ul>
                <li className="prosp">El componente `Gravatar` se utiliza para mostrar una imagen de Gravatar basada en el correo electrónico proporcionado.</li>
                <li className="prosp">Props:</li>
                <ul>
                    <li><strong>email</strong>: El correo electrónico del usuario para generar el hash de Gravatar.</li>
                    <li><strong>alt</strong>: Texto alternativo para la imagen.</li>
                    <li><strong>size</strong>: Tamaño de la imagen (opcional, por defecto es 80).</li>
                    <li><strong>className</strong>: Clase CSS para la imagen (opcional).</li>
                </ul>
            </ul>
        </>
    );
}

export default gravatar;