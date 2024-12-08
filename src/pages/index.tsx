import React from 'react'
import { A } from 'nanify';

interface homeProps {

}

const home: React.FC<homeProps> = () => {


  return (
    <>
      <A href='/nano'>nano</A>
      <br />
      <A href='/gravatar'>gravatar</A>
      <br />
      <A href='/btns'>btns</A>
      <br />
      <A href='/layout/headers/header-one-element-center'>header-one-element-center</A>

      <br />
      <A href='/layout/footers/simple-footer'>simple-footer</A>

      <br />
      <A href='/form/input'>inputs</A>
    </>
  );
}

export default home;