import React from "react";
import Header from "../../components/Header/Header.jsx";
import FormComponent from "../../components/Form/FormComponent.jsx"
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Faqs from "../../components/FAQs/Faqs.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import TapOrScan from "../../components/TapOrScan/TapOrScan.jsx";

// import components

const Home = () => {
  return (
    <>
      <div className="z-50">
        <FormComponent />
        <TapOrScan />
        <Testimonials />
        <Faqs />
      </div>
     
    </>
  );
};

export default Home;
