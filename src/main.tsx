import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from 'wouter';

import App from './App';
import './index.css';

// Safely determine the base path. If it's just "/", we keep it empty.
const rawBase = import.meta.env.BASE_URL || '/';
const routerBase = rawBase === '/' ? '' : rawBase.replace(/\/$/, '');

console.log("Current Router Base Path:", routerBase); // Helps us debug in the mobile browser logs!

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router base={routerBase}>
      <App />
    </Router>
  </StrictMode>,
);
