import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import AuthProvider from '@/components/OLD/context/AuthContext';
import AppRoutes from './app/routers';
import LayoutDocs from './layout-docs/layout';
import "./css/style.css"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
      <LayoutDocs>
        <AppRoutes />
      </LayoutDocs>
      {/* </AuthProvider> */}
    </BrowserRouter>
  </StrictMode>,
);