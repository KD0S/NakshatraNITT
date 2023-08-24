import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SpaceBackground from './components/SpaceBackground/SpaceBackground';
import LandingPage from './pages/LandingPage/LandingPage';
import { About } from './pages/About/About';
import Projects from './pages/Projects/Projects';
import { Events } from './pages/Events/Events';
import { Achievements } from './pages/Achievements/Achievements';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);

root.render(
   <React.StrictMode>
      <SpaceBackground />
      <LandingPage />
      <About></About>
      <Projects></Projects>
      <Events></Events>
      <Achievements></Achievements>
   </React.StrictMode>
);
