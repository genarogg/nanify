import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./style.css"
import Gravatar from '@view/gravatar/page';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/gravatar" element={<Gravatar />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);