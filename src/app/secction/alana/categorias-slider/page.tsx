import React from 'react'
import CategoriasSlider from "@components/sections/ecomerce/categoriaSlider/CategoriasSlider"

interface categoriasProps {

}

const categorias: React.FC<categoriasProps> = () => {
    const data = [
        { name: 'Categoría 1', imgSrc: 'https://w0.peakpx.com/wallpaper/390/219/HD-wallpaper-abstract-color-cuadros-fondo-life.jpg' },
        { name: 'Categoría 2', imgSrc: 'https://w0.peakpx.com/wallpaper/390/219/HD-wallpaper-abstract-color-cuadros-fondo-life.jpg' },
        { name: 'Categoría 3', imgSrc: 'https://w0.peakpx.com/wallpaper/390/219/HD-wallpaper-abstract-color-cuadros-fondo-life.jpg' },
        { name: 'Categoría 4', imgSrc: 'https://w0.peakpx.com/wallpaper/390/219/HD-wallpaper-abstract-color-cuadros-fondo-life.jpg' },
        { name: 'Categoría 5', imgSrc: 'https://w0.peakpx.com/wallpaper/390/219/HD-wallpaper-abstract-color-cuadros-fondo-life.jpg' },
    ];

    return (<CategoriasSlider data={data} ></CategoriasSlider>);
}

export default categorias;