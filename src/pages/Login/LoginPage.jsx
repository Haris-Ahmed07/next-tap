import React from "react";
import Header from "../../components/Header/Header.jsx";
import LoginForm from "../../components/Forms/LoginForm.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const LoginPage = () => {
  return (
    <>
      <div className="z-50">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
