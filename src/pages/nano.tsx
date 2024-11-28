import React from 'react'

interface nanoProps {

}

const nano: React.FC<nanoProps> = () => {
    return (
        <>
            <h1>Nano</h1>
            <p>Nano page</p>

            <h2>Components</h2>

            <h3>Icon</h3>
            <p>Icon component</p>
            <ul>
                <li className="prosp">El componente `Icon` se utiliza para renderizar un ícono con clases CSS opcionales.</li>
                <li className="prosp">Props:</li>
                <ul>
                    <li><strong>icon</strong>: El ícono a renderizar (opcional).</li>
                    <li><strong>className</strong>: Clase CSS para el ícono (opcional).</li>
                </ul>
            </ul>


            <h3>A</h3>
            <p>A component</p>
            <ul>
                <li className="prosp">El componente `A` es un enlace que puede manejar diferentes tipos de navegación.</li>
                <li className="prosp">Props:</li>
                <ul>
                    <li><strong>href</strong>: La URL a la que se enlaza.</li>
                    <li><strong>type</strong>: El tipo de enlace (opcional). Puede ser "mailto", "a", "push" o por defecto.</li>
                    <li><strong>children</strong>: Los elementos hijos que se renderizan dentro del enlace (opcional).</li>
                    <li><strong>className</strong>: Clase CSS para el enlace (opcional).</li>
                </ul>
            </ul>


            <h3>notify</h3>
            <p>notify function</p>
            <ul>
                <li className="prosp">La función `notify` se utiliza para mostrar notificaciones de tipo toast.</li>
                <li className="prosp">Props:</li>
                <ul>
                    <li><strong>type</strong>: El tipo de notificación. Puede ser "success", "error" o "warning".</li>
                    <li><strong>message</strong>: El mensaje de la notificación.</li>
                    <li><strong>config</strong>: Configuración opcional para personalizar la notificación.</li>
                </ul>
                <li className="prosp">Advertencia: Asegúrate de incluir /ToastContainer/ en tu layout para que las notificaciones se muestren correctamente.</li>
                <li className="prosp">Documentación oficial: <a href="https://fkhadra.github.io/react-toastify/introduction" target="_blank" rel="noopener noreferrer">react-toastify</a></li>
            </ul>
        </>
    );
}

export default nano;