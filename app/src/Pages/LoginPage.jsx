import React from "react";
import LoginButton from "../Components/Login/LoginButton";
import MenuBar from "../Bar/MenuBar";
import LoginInputField from "../Components/Login/LoginInputField";

const LoginPage = () => {
  return (
    <div>
      <MenuBar />
      <h1>This is login page</h1>
      <LoginButton />
      <LoginInputField />
    </div>
  );
};

export default LoginPage;
