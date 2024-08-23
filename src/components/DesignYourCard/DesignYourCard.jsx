import React from "react";
import designImg from "/assets/design-img.svg";
//import data
import {Link } from "react-router-dom"
import { design } from "../../data.js";
const { title, price, subtitle, buttonText } = design;

const Features = () => {
  return (
    <div className="bg-white w-full xxl:ps-16 xxl:pe-24 xxl:py-10
    xl:ps-16 xl:pe-24  xl:py-10 lg:ps-10 lg:pe-16  lg:py-6 md:pt-2 md:pb-8  sm:pt-2 sm:pb-6  xs:pt-4 xs:pb-6">
      <section className=" xxl:gap-x-8 xl:gap-x-8 lg:gap-x-6 grid xxl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-1">
        <div className="xl:grid-cols-7 xl:col-span-8 lg:col-span-8 md:col-span-12 sm:col-span-12 xs:col-span-12 flex items-center justify-center ">
          {/* Left Section */}
          <div className="mx-auto w-full ">
            <img src={designImg} alt="" className="w-full h-auto max-w-full" />
          </div>
        </div>
        <div className="xxl:grid-cols-5 xl:col-span-4 lg:col-span-4 md:col-span-12 sm:col-span-12 xs:col-span-12 flex items-center justify-center">
          <div className="flex flex-col justify-center mx-auto xxl:items-start xl:items-start lg:items-start md:items-center sm:items-center xs:items-center w-full h-full px-4 box-border">
            <h1 className="mt-3 mb-1 text-start font-bold xl:text-[35px] lg:text-[30px] md:text-[25px] sm:text-[22px] xs:text-[20px] leading-tight text-black">
              {title}
            </h1>
            <h1 className="xxl:my-3 xl:my-3 lg:my-3 md:my-2 sm:my-2 xs:my-1 text-start font-semibold xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] xs:text-[15px] leading-tight text-black">
              {price}
            </h1>
            <h2 className="font-thin text-black pb-2 xxl:px-0 xl:px-0 lg:px-0 md:px-5 sm:px-5 xs:px-5 xxl:text-start xl:text-start lg:text-start md:text-center sm:text-center xs:text-center xl:text-[19px] lg:text-[17px] md:text-[15px] sm:text-[13px] xs:text-[13px]">
              {subtitle}
            </h2>
            <button className="bg-darkBlue rounded-xl my-2 px-6 md:px-10 py-2 md:py-3">
              <Link to="/make-your-own-card"
                className="xl:text-[19px] lg:text-[17px] md:text-[16px] sm:text-[15px] xs:text-[13px] font-bold text-white transition-all"
                href="/shop"
              >
                {buttonText}
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
