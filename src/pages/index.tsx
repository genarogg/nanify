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
      <Seccion titulo="basicos">
        <A href='/nano'>nano</A>
        <A href='/gravatar'>gravatar</A>
        <A href='/form/input'>inputs</A>
      </Seccion>

      <Seccion titulo="btns">
        <A href='/btns'>btns</A>
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