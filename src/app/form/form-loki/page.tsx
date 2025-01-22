import React from 'react'
import LokiLogin from '@components/form/formLoki/LokiLogin';

interface pageProps {

}

const page: React.FC<pageProps> = () => {
    return (
        <div className='loki-form-container' style={{ margin: "0 auto" }} >
            <LokiLogin />
        </div>
    );
}

export default page;