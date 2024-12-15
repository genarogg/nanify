import React from 'react'
import { A } from 'nanify';

interface homeProps {

}

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

     


      {/* <A href='/layout/headers/header-one-element-center'>header-one-element-center</A>

      <br />
      <A href='/layout/footers/simple-footer'>simple-footer</A>



      <br />
      <A href='/assembled/loki-login'>loki-login</A> */}
    </>
  );
}

export default home;