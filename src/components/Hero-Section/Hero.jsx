import React from "react";
import cards from "../../assets/cards.svg";
import { Link } from "react-router-dom";
import featureReview from "../../assets/banner-reviews.svg";
import heroRatingicon from "../../assets/heroRatingIcon.svg";
import heroBackground from "../../assets/heroBackground.svg";
//import data

import { hero } from "../../data.js";
import Cards from "./Cards.jsx";
import { Grid } from "@mui/material";
const { heading, title, subtitle, buttonText } = hero;

const Hero = () => {
  return (
    <div
      className="grid grid-cols-2 w-full xxl:py-32 xl:py-24 lg:py-16 md:pt-24 md:pb-0 sm:pt-12 sm:pb-12 xs:pt-16 xs:pb-16 xxl:px-32 xl:px-16 lg:px-16 md:px-16 sm:px-8 xs:px-8 xs:space-y-11 md:space-y-0"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Left Section */}
      <div className="col-span-2 xs:col-span-2 lg:col-span-1 flex flex-col items-center justify-center h-full xxl:pe-24 xl:pe-16 lg:pe-12 md:pe-10">
        <div className="h-full flex flex-col  md:justify-center">
          <p className="text-white font-montserrat font-semibold xxl:text-[23px] xl:text-[21px] lg:text-[19px] md:text-[17px] sm:text-[15px] xs:text-[15px] text-center w-full xs:w-[100%] md:w-[100%] lg:w-[100%] border border-light rounded-xl p-2 ">
            {heading}
          </p>
          <h1 className="my-4 text-white font-montserrat xxl:text-start  xl:text-start  lg:text-start  md:text-center sm:text-center xs:text-center font-bold xxl:text-[40px] xl:text-[35px] lg:text-[30px] md:text-[30px] sm:text-[28px] xs:text-[27px]">
            {title}
          </h1>
          <h2 className="font-thin text-white font-montserrat xxl:text-start  xl:text-start  lg:text-start  md:text-center sm:text-center xs:text-center  xxl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[13px]">
            {subtitle}
          </h2>
          <div className="flex items-start font-montserrat xxl:justify-start xl:justify-start lg:justify-start md:justify-center sm:justify-center xs:justify-center cursor-pointer">
            <button className="bg-darkBlue rounded-2xl mt-6 px-10 py-2 md:px-14 md:py-3 lg:px-20 lg:py-4">
              <Link to="/make-your-own-card"
                className=" xxl:text-[18px] xl:text-[18px] lg:text-[15px] md:text-[15px] sm:text-[13px] xs:text-[13px] font-bold text-white font-montserrat transition-all"
                href="/shop"
              >
                {buttonText}
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="col-span-2  xs:col-span-2 lg:col-span-1 h-full flex flex-col xxl:items-center xl:items-center lg:items-center md:items-center sm:items-start xs:items-start justify-center">
        <div className="h-full flex flex-col xxl:mx-[10rem] xl:mx-[10rem] lg:mx-[10rem] md:mx-0 sm:ms-[42%] xs:ms-[42%] justify-center">
          <Cards className="absolute" />
          <img
            className="absolute w-[250px] backdrop-blur-sm  xxl:-mt-[10rem] xl:-mt-[14rem] lg:-mt-[15rem] md:-mt-[18rem] sm:-mt-[12rem] xs:-mt-[8rem] lg:w-[250px] md:w-[200px] sm:w-[190px] xs:w-[150px]"
            src={heroRatingicon}
            alt=""
            style={{ transform: "translate(-60%,340%)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
