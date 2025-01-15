'use client'

import React, { useState } from 'react';
import { FaSearchengin } from 'react-icons/fa';

import { Input } from "@nano"
interface SearchInputProps {
    setQuickFilterText: React.Dispatch<React.SetStateAction<string>>;
}

const AgSearchInput: React.FC<SearchInputProps> = ({ setQuickFilterText }) => {


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setQuickFilterText(event.target.value);
    };

    return (
        <div className="tablet-search">
            <Input
                type="text"
                name="search"
                onChange={handleInputChange}
                placeholder="Search"
                icon={<FaSearchengin />}
            />
        </div>
    );
};

export default AgSearchInput;