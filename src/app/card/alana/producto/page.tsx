import React from 'react'
import CardProductoAlana from '@components/cards/ecomerce/CardProductoAlana'
import { regexUrl } from '@fn/regexUtils'
interface cardProductoProps {

}

const cardProducto: React.FC<cardProductoProps> = () => {
    const data = {
        url: regexUrl("afd adsf"),
        titulo: "Producto 1",
        colores: [
            {
                color: "#000",
                primaryImg: "https://esprit.vteximg.com.br/arquivos/ids/1370194/34_432F001_GRI180403_0.jpg?v=638561621764400000?1735430400011",
                secundaryImg: "https://esprit.vteximg.com.br/arquivos/ids/1370625/34_432F014_VER190516_0.jpg?v=638561624971700000?1735689600011",
                precio: 100,
                tallas: ["S", "M", "L", "XL"],
            },
            {
                color: "#f1f",
                primaryImg: "https://esprit.vteximg.com.br/arquivos/ids/1370194/34_432F001_GRI180403_0.jpg?v=638561621764400000?1735430400011",
                secundaryImg: "https://esprit.vteximg.com.br/arquivos/ids/1370625/34_432F014_VER190516_0.jpg?v=638561624971700000?1735689600011",
                precio: 100,
                tallas: ["M", "L", "XL"],
            },
            {
                color: "#f5a",
                primaryImg: "https://esprit.vteximg.com.br/arquivos/ids/1370194/34_432F001_GRI180403_0.jpg?v=638561621764400000?1735430400011",
                secundaryImg: "https://esprit.vteximg.com.br/arquivos/ids/1370625/34_432F014_VER190516_0.jpg?v=638561624971700000?1735689600011",
                precio: 100,
                tallas: ["S", "M", "XL"],
            }
        ],

    }

    return (<><CardProductoAlana data={data}/></>);
}

export default cardProducto;