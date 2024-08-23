import React from "react";
import Header from "../../components/Header/Header.jsx";
import SignForm from "../../components/Forms/SignUpForm.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const SignUpPage = () => {
  return (
    <>
      <div className="z-50">
        <SignForm />
      </div>
    </>
  );
};

export default SignUpPage;
