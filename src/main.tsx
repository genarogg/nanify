import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app/routers';
import LayoutDocs from './layout/layout';
import "./css/style.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <LayoutDocs> */}
        <AppRoutes />
      {/* </LayoutDocs> */}
    </BrowserRouter>
  </StrictMode>,
);