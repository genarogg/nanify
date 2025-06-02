import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./sass/style.scss"

import Home from "./docs/home/page";

import Gravatar from './docs/gravatar/page';

import Nano from "./docs/nono/page"

import Hamburger from "./docs/btns/hamburguesa/page"

import BtnBasico from "./docs/btns/basico/page"

import FormLoki from "./docs/form/form-loki/page"

import SliderBG from "./docs/slider/background/page";

import CardProductoAlana from './docs/card/alana-ecomerce/page';

import MainContent from '@components/sections/dinamicSection/index';

import Youtube from './docs/youtube/page';

import ThreeColumns from './docs/three-colunm/page';

import TwoColumns from './docs/two-colunm/page';

import LayoutExample from './docs/layout-example/page';

import Img from "./docs/img/page";




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

        <Route path="/youtube" element={<Youtube />} />

        <Route path="/columns/three" element={<ThreeColumns />} />

        <Route path="/columns/two" element={<TwoColumns />} />

        <Route path="/layout/example" element={<LayoutExample />} />

        <Route path="/img" element={<Img />} />
        
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);