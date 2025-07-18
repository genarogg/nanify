import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import AuthProvider from '@context/AuthContext';

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

import ParticleWrapper from "./docs/wrapper/particulas/page";

import Grid from "./docs/wrapper/grid/page";

import AnimatedBackgroundWrapper from './docs/wrapper/animated-background-wrapper/page';

import ModalPage from './docs/ux/modal/page';
import TabletPage from './docs/tablet/page';
import TabletMyPage from './docs/tablet-my/page';

import SelectPage from './docs/ux/select/page';

import TabsPage from './docs/ux/tabs/page';

import BtnPage from './docs/ux/btns/page'; // Import the buttons page to ensure it's included in the build

import LayoutClean from './docs/layout/clean/page';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        
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

          <Route path="/wrapper/particulas" element={<ParticleWrapper />} />

          <Route path="/wrapper/grid" element={<Grid />} />

          <Route path="/wrapper/animated-background-wrapper" element={<AnimatedBackgroundWrapper />} />

          {/* Catch-all route for 404 */}

          <Route path="/ui/modal" element={<ModalPage />} />

          <Route path="/ui/select" element={<SelectPage />} />

          <Route path="/ui/tabs" element={<TabsPage />} />

          <Route path="/ui/btns" element={<BtnPage />} />

          {/* Tablet page */}

          <Route path="/table" element={<TabletPage />} />

          <Route path="/table-my" element={<TabletMyPage />} />

          <Route path="/layout/clean" element={<LayoutClean />} />



          {/* Fallback route for unknown paths */}

        </Routes>

      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);