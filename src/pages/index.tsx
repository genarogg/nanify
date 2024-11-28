import React from 'react'
import { A } from '@nano';

interface homeProps {

}

const home: React.FC<homeProps> = () => {


  return (
    <>
      <A href='/nano'>nano</A>
      <A href='/gravatar'>gravatar</A>
    </>
  );
}

export default home;