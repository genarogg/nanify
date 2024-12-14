import React from 'react';

interface InputProps {
    className?: string;
    name: string;
    type: 'password' | 'text' | 'email' | 'date' | 'number' | 'tel' | 'url';
    icon?: React.ReactNode;
    id?: string;
    required?: boolean;
    disabled?: boolean;
    max?: number;
    min?: number;
    hasContentState?: boolean;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Input: React.FC<InputProps>;

export { Input as default };
