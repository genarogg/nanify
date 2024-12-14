import React, { useRef } from 'react'
import { Input } from '@form';
import { BsEnvelopeFill } from 'react-icons/bs';

interface inputProps { }

const input: React.FC<inputProps> = () => {
    const inputRef = useRef({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        inputRef.current = { ...inputRef.current, [name]: value };
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(inputRef.current);
    };

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <Input
                    type='text'
                    name="name"
                    placeholder='name'
                    onChange={handleChange}
                />

                <Input
                    type='email'
                    name="email"
                    placeholder='email'
                    onChange={handleChange}
                />

                <Input
                    type='password'
                    name="password"
                    placeholder='password'
                    icon={<BsEnvelopeFill />}
                    onChange={handleChange}
                />

                <Input
                    type='date'
                    name="date"
                    placeholder='date'
                    icon={<BsEnvelopeFill />}
                    onChange={handleChange}
                />

                <Input
                    type='number'
                    name="number"
                    placeholder='number'
                    icon={<BsEnvelopeFill />}
                    onChange={handleChange}
                />

                <Input
                    type='tel'
                    name="tel"
                    placeholder='tel'
                    icon={<BsEnvelopeFill />}
                    onChange={handleChange}
                />

                <Input
                    type='url'
                    name="url"
                    placeholder='url'
                    icon={<BsEnvelopeFill />}
                    onChange={handleChange}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default input;