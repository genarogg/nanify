import React from 'react'
import CardProductoAlana from '@/OLD/card/ecomerce/CardProductoAlana'
import { regexUrl } from '@/functions'
interface cardProductoProps {

}

const cardProducto: React.FC<cardProductoProps> = () => {
    const data = {
        titulo: "Producto 1",
        url: regexUrl("afd adsf"),
        imgs: [
            "https://esprit.vteximg.com.br/arquivos/ids/1370194/34_432F001_GRI180403_0.jpg",
            "https://esprit.vteximg.com.br/arquivos/ids/1370625/34_432F014_VER190516_0.jpg"
        ],
        precio: 100,
        colores: ["#000", "#f0e"],
        tallas: ["S", "M", "L", "XL"]
    }

    return (
        <>
            <CardProductoAlana data={data} />
        </>
    );
}

export default cardProducto;