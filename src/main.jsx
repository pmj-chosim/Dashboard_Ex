import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import DashboardComponent from './Components/DashboardComponent.jsx';
import MenuBar from './Footer/MenuBar.jsx';
import UserInfoComponent from './Components/UserInfoComponent.jsx';
import AnalysisResultComponent from './Components/AnaylsisResultComponenet.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MenuBar />
    <UserInfoComponent />
    <DashboardComponent />
    <AnalysisResultComponent />
  </StrictMode>
);
