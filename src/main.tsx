import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./sass/style.scss"

import Gravatar from '@view/gravatar/page';
import Nano from "@view/nono/page"

import Hamburger from "@view/btns/hamburguesa/page"
import BtnBasico from "@view/btns/basico/page"

import FormLoki from "@view/form/form-loki/page"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/gravatar" element={<Gravatar />} />
        <Route path="/nano" element={<Nano />} />
        <Route path="/btns/hamburguesa" element={<Hamburger />} />
        <Route path="/btns/basico" element={<BtnBasico />} />

        <Route path="/form/form-loki" element={<FormLoki />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);