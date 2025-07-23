import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import AuthProvider from '@/components/OLD/context/AuthContext';
import { AppRoutes } from './pages/routes';
import "./sass/style.scss";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
        <AppRoutes />
      {/* </AuthProvider> */}
    </BrowserRouter>
  </StrictMode>,
);