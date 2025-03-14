import React from "react";
import DashboardComponent from "../Components/Home/DashboardComponent.jsx";
import LoginUserBar from "../Bar/LoginUserBar.jsx";
import UserInfoComponent from "../Components/Home/UserInfoComponent.jsx";
import AnalysisResultComponent from "../Components/Home/AnaylsisResultComponenet.jsx";

const PersonalPage = () => {
  return (
    <div>
      <LoginUserBar />
      <UserInfoComponent />
      <DashboardComponent />
      <AnalysisResultComponent />
    </div>
  );
};

export default PersonalPage;
