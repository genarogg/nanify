"use client";

import React from 'react';
import Gravatar  from "@components/gravatar";

interface gravatarProps { }

const gravatar: React.FC<gravatarProps> = () => {
    return (
        <>
         
            <Gravatar email="genarrogg@gmail.com" alt='genaro gonzalez' />
            <br />
            Uso del componente <code>{'<Gravatar email="genarrogg@gmail.com" alt="genaro gonzalez"/>'}</code>
           
        </>
    );
}

export default gravatar;