import React from "react";
import featureImg from "../../assets/banner2-cards.png";
//import data
import { Link } from "react-router-dom";

import { features } from "../../data.js";
const { title, subtitle, buttonText } = features;

const Features = () => {
  return (
    <div
      className="bg-banner2  w-full xxl:ps-16 xxl:pe-24 xxl:py-16
    xl:ps-16 xl:pe-24 lg:px-8 md:px-10 sm:px-10 xs:px-6  xl:py-16 lg:ps-10 lg:pe-16  lg:py-12 md:pt-10 md:pb-12  sm:py-10  xs:py-10"
    >
      <section className=" w-full flex flex-col xxl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-center mx-auto xxl:px-20 xs:px-2 md:pt-8 xxl:pt-8 xl:pt-8 lg:pt-6  ">
        <div className=" flex flex-col justify-center mx-auto xxl:items-start xl:items-start lg:items-start md:items-center sm:items-center xs:items-center  xxl:px-0 xl:px-0 lg:px-0 md:px-12 sm:px-8 xs:px-2 ">
          <h1 className="mb-4 xxl:text-start xl:text-start lg:text-start md:text-center sm:text-center xs:text-center  font-semibold xxl:text-[40px] xl:text-[40px] lg:text-[37px] md:text-[33px] sm:text-[30px] xs:text-[27px] leading-none text-white xxl:pe-16 xl:pe-16 lg:pe-10">
            {title}
          </h1>

          <h2 className=" font-thin text-white pb-2 xxl:text-start xl:text-start lg:text-start md:text-center sm:text-center xs:text-center  xxl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px]  xxl:pe-48 xl:pe-24 lg:pe-10">
            {subtitle}
          </h2>

          <Link to="/make-your-own-card">
            <button className="bg-darkBlue rounded-2xl xs:mt-1  xs:mb-5 xs:px-8 xs:py-2 sm:mt-1  sm:mb-5 sm:px-8 sm:py-3 md:mt-2  md:mb-10 md:px-8 md:py-3">
              <a
                className="xxl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[13px] sm:text-[13px] xs:text-[12px]  font-bold text-white  transition-all"
                href="/shop"
              >
                {buttonText}
              </a>
            </button>
          </Link>
        </div>
        <div className="justify-center items-center mx-auto xs:px-2 sm:px-6">
          <img src={featureImg} alt=""></img>
        </div>
      </section>
    </div>
  );
};

export default Features;
