import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./sass/style.scss"

import Home from "@view/home/page";

import Gravatar from '@view/gravatar/page';
import Nano from "@view/nono/page"

import Hamburger from "@view/btns/hamburguesa/page"
import BtnBasico from "@view/btns/basico/page"

import FormLoki from "@view/form/form-loki/page"

import SliderBG from "@view/slider/background/page";

import CardProductoAlana from '@view/card/alana-ecomerce/page';

import MainContent from '@components/sections/dinamicSection/index';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/gravatar" element={<Gravatar />} />
        <Route path="/nano" element={<Nano />} />

        <Route path="/btns/hamburguesa" element={<Hamburger />} />
        <Route path="/btns/basico" element={<BtnBasico />} />

        <Route path="/form/form-loki" element={<FormLoki />} />

        <Route path="/slider/background" element={<SliderBG />} />

        <Route path="/card/alana-ecomerce" element={<CardProductoAlana />} />
        
        <Route path="/section/dinamicSection" element={<MainContent />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
);