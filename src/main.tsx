import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './font/fonts/ttnormspro-regular.eot';
import './font/fonts/ttnormspro-regular.ttf';
import './font/fonts/ttnormspro-regular.svg';
import './font/fonts/ttnormspro-regular.woff2';
import './font/fonts/ttnormspro-regular.woff';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
