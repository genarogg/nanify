import React from 'react'
import { Input } from '@form';
import { BsEnvelopeFill } from 'react-icons/bs';


interface inputProps {

}

const input: React.FC<inputProps> = ({

}) => {
    return (
        <>
            <form action="">
                <Input
                    type='text'
                    name="hola"
                    placeholder='hola'
                    value=''
                    
                />

                <Input
                    type='text'
                    name="hola2"
                    placeholder='hola2'
                    value=''
                    icon={<BsEnvelopeFill />}
                    
                />
            </form>

        </>);
}

export default input;