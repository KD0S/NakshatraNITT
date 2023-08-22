import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SpaceBackground from './components/SpaceBackground/SpaceBackground';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
   <React.StrictMode>
      <SpaceBackground />
   </React.StrictMode>
);
