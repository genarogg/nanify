'use client'
import React from 'react'
import FromToDate from "./FromToDates"
import SelectFilters from './SelectFilters'

interface FiltersProps { }

const Filters: React.FC<FiltersProps> = () => {
    return (
        <>
            <FromToDate />
            <SelectFilters />
        </>
    );
}

export default Filters;