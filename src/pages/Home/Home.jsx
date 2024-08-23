import React from "react";
import Banner from "../../components/Banner/Banner.jsx"
import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Hero-Section/Hero.jsx"
import Features from "../../components/Features/Features.jsx"
import DesignYourCard from "../../components/DesignYourCard/DesignYourCard.jsx"
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Faqs from "../../components/FAQs/Faqs.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import BestSellingProductComponent from "../../components/BestSellingProductComponent/BestSellingProductComponent.jsx";
import FeaturedProductComponent from "../../components/FeaturedProductComponent/FeaturedProductComponent.jsx";
// import components

const Home = () => {
  return (
    <>
      <div className="z-50">

        <Hero />
        <Banner />
        <FeaturedProductComponent limit={4}/>
        <Features /> 
        <BestSellingProductComponent limit={4}/>
        <DesignYourCard /> 
        <Testimonials />
        <Faqs />
      </div>
     
    </>
  );
};

export default Home;


