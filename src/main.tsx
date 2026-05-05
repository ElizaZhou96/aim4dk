import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
// import Sponsorship from './Sponsorship';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// createRoot(document.getElementById('root') as HTMLElement).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/sponsorship" element={<Sponsorship />} />
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// );
