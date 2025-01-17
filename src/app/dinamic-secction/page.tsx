'use client'
import React, { useState } from 'react'
import MainContent from '@components/dinamicSection/MainComponent'

interface dinamicSecctionProps {

}

const dinamicSecction: React.FC<dinamicSecctionProps> = () => {
    const [context, setContext] = useState("initial");



    return (<>
        <nav>
            <button onClick={() => setContext("demo1")}>Demo 1</button>
            <button onClick={() => setContext("demo2")}>Demo 2</button>
            <button onClick={() => setContext("demo3")}>Demo 3</button>
        </nav>

        <MainContent context={context} setContext={setContext} />
    </>);
}

export default dinamicSecction;