import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ShopComponentCard from "../ShopCard/ShopComponentCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { cards } from "../../data.js"

const ShopComponent = ({ title, description, link, discounted, discountPercentage, even }) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    968: {items: 3},
    1024: { items: 4 },
  };

  const images = cards.map((item, index) => (
    <div className="item flex items-center justify-center" key={index}>
      <ShopComponentCard
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price}
        discounted= {discounted}
        discountPercentage={discountPercentage}
      />
    </div>
  ));

  return (
    <div className={`w-full xxl:px-16 xl:px-12 lg:px-8 md:px-6 sm:px-4 xs:px-2 xs:pt-6 xs:pb-4 sm:pt-6 sm:pb-4 md:pt-6 md:pb-4 lg:pt-10 lg:pb-6 xl:pt-16 xl:pb-10 xxl:pt-16 xxl:pb-16 ${even ? "bg-[#E5E7EB]": ""}`}>
    <div className="xxl:text-start xl:text-start lg:text-center md:text-center sm:text-center xs:text-center">
      <h2 className="text-2xl font-montserrat font-semibold text-gray-900 pt-6 pb-2 px-10 flex xxl:text-[40px] xl:text-[40px] lg:text-[37px] md:text-[33px] sm:text-[30px] xs:text-[27px] xxl:text-start xl:text-center lg:text-center md:text-center sm:text-center xs:text-center">
        {title}
      </h2>
      <div className="flex xxl:flex-row xl:flex-col lg:flex-col md:flex-col sm:flex-col xs:flex-col justify-between  pb-4">
        <p className="text-md font-montserrat text-gray-800 px-10 flex flex-start xxl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px] py-2">
          {description}
        </p>
        <div className="flex items-start xs:justify-end xs:mr-7 md:mr-9 lg:mr-16 xl:mr-20 xxl:mr-24 cursor-pointer">
            <Link to={link}>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl xxl:text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200">
                View All
              </span>
            </Link>
          </div>
      </div>
    </div>
    <div className="relative px-[3rem] w-full">
      <AliceCarousel 
        mouseTracking
        disableDotsControls
        items={images} // Use the images array here
        responsive={responsive}
        controlsStrategy="responsive"
        keyboardNavigation={true}
        renderPrevButton={() => {
          return (
            <Button
              variant="text"
              className="z-40"
              sx={{
                position: "absolute",
                top: "10rem",
                left: "-4rem",
                transform: "rotate(360deg)",
                backgroundColor: "transparent"
                
              }}
              aria-label="previous"
            >
              <KeyboardArrowLeftIcon sx={{ color: "black" }} />
            </Button>
          );
        }}
        renderNextButton={() => {
          return (
            <Button
               variant="text"
              className="z-40"
              sx={{
                position: "absolute",
                top: "10rem",
                right: "-4rem",
                transform: "rotate(360deg)",
                backgroundColor: "transparent",
               
              }}
              aria-label="next"
            >
              <KeyboardArrowLeftIcon
                sx={{ transform: "rotate(180deg)", color: "black" }}
              />
            </Button>
          );
        }}
      />
    </div>
  </div>
  );
};

export default ShopComponent;
