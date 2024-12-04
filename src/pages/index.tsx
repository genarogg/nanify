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
    </>
  );
}

export default home;