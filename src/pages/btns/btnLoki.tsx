import React, { useState } from 'react'
import { BtnLoki } from '@components/btns';

interface btnLokiProps {

}

const btnLoki: React.FC<btnLokiProps> = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <BtnLoki isActive={isActive} setIsActive={setIsActive} />
        </>
    );
}

export default btnLoki;