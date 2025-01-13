import React from 'react'
import { A } from 'nanify';

interface homeProps { }

const home: React.FC<homeProps> = () => {

  const Seccion = ({ titulo, children }: any) => {
    return (
      <>
        <br />
        <h2>{titulo}</h2>
        <div>{children}</div>
        <br />
      </>
    )
  }

  return (
    <>
      <Seccion titulo="basico">
        <A href='/basico/nano'>nano</A>
        <A href='/basico/gravatar'>gravatar</A>
      </Seccion>

      <Seccion titulo="formulario">
        <A href='/form/input'>inputs</A>
        <A href='/form/checkbox'>checkbox</A>
      </Seccion>

      <Seccion titulo="btns">
        <A href='/btns/basico'>basico</A>
        <A href='/btns/hamburguesa'>hamburguesa</A>
      </Seccion>

      <Seccion titulo="Img">
        <A href='/img'>Img</A>
      </Seccion>

      <Seccion titulo="Search">
        <A href='/algolia'>Algolia</A>
      </Seccion>

      <Seccion titulo="Layout">
        <A href='/layout/alana'>Alana</A>
      </Seccion>

      <Seccion titulo="Slider">
        <A href='/slider/background'>background</A>
        <A href='/slider/two-elements'>two-elements</A>
      </Seccion>

      <Seccion titulo="Cards">
        <A href='/card/alana/producto'>CardProductoAlana</A>
      </Seccion>

      <Seccion titulo="secction">
        <A href='/secction/alana/categorias-slider'>categorias-slider</A>
      </Seccion>

      <Seccion titulo="view">
        <A href='/view/alana/auth'>auth alana</A>
      </Seccion>

  
    </>
  );
}

export default home;