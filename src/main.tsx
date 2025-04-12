import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Gravatar from '@components/gravatar';


const Demo = () => {
  return (
    <div>
      <Gravatar email='genarrogg@gmail.com' alt='hola' />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Demo></Demo>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);