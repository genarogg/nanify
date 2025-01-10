import React from 'react'
import CardProductoAlana from '@components/cards/ecomerce/CardProductoAlana'
import { regexUrl } from '@fn/regexUtils'
interface cardProductoProps {

}

const cardProducto: React.FC<cardProductoProps> = () => {
    const data = {
        url: regexUrl("afd adsf"),
        titulo: "Producto 1",
        tallas: ["S", "M", "L", "XL"],
        colores: ["#000", "#fff"],
        precios: [100],
        imgs: [
            "https://esprit.vteximg.com.br/arquivos/ids/1370194/34_432F001_GRI180403_0.jpg",
            "https://esprit.vteximg.com.br/arquivos/ids/1370625/34_432F014_VER190516_0.jpg"
        ],
    }



    return (<>
        <div className="dd">
            <CardProductoAlana data={data} id={data.url}/>
        </div>
    </>);
}

export default cardProducto;