'use client'
import React, { useState, useEffect } from 'react'
import { URL_BACKEND } from '@env'

import "./sass/_demo.scss"

import { AgLayout, AgSearchInput, AgTabletContainer } from '@components/tablet'

import { staticDataFake, EmpleadoTypes, configTablet } from "./configTablet"

interface DemoProps {

}

const Demo: React.FC<DemoProps> = () => {
    const [quickFilterText, setQuickFilterText] = useState("");

    const [data, setData] = useState<EmpleadoTypes[]>(staticDataFake);

    const Btns = () => {
        return (
            <>
                <button>hola</button>
                <button>mundo</button>
            </>
        );
    };

    useEffect(() => {
        fetch(`${URL_BACKEND}/empleado/get-all`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.data);
            });
    }, []);

    return (
        <AgLayout
            titulo="Demo"
            btns={<Btns />}
            search={<AgSearchInput setQuickFilterText={setQuickFilterText} />}
        >
            <AgTabletContainer
                columnDefs={configTablet}
                rowData={data}
                quickFilterText={quickFilterText}
            />
        </AgLayout>

    );
}

export default Demo;