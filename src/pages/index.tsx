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
      <A href='/layout/header-one-element-center'>header-one-element-center</A>
    </>
  );
}

export default home;