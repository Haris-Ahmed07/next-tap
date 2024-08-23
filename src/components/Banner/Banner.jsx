import React from "react";
import { motion } from "framer-motion";
import diamond from "../../assets/diamond.png";
import Icon1 from "../../assets/bannerIcon1.svg";
import Icon2 from "../../assets/bannerIcon2.svg";
import Icon3 from "../../assets/bannerIcon3.svg";
import Icon4 from "../../assets/bannerIcon4.svg";
import Icon5 from "../../assets/bannerIcon5.svg";
import Icon6 from "../../assets/bannerIcon6.svg";
import Icon7 from "../../assets/bannerIcon7.svg";
import Icon8 from "../../assets/bannerIcon8.svg";
import Icon9 from "../../assets/bannerIcon9.svg";
import Icon10 from "../../assets/bannerIcon10.svg";
import Icon11 from "../../assets/bannerIcon11.svg";
import Icon12 from "../../assets/bannerIcon12.svg";
import Icon13 from "../../assets/bannerIcon13.svg";
import Icon14 from "../../assets/bannerIcon14.svg";
import Icon15 from "../../assets/bannerIcon15.svg";
import Icon16 from "../../assets/bannerIcon16.svg";
import Icon17 from "../../assets/bannerIcon17.svg";
import "./BannerStyle.css";

const Banner = () => {
  const bannerItems1 = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8];
  const bannerItems2 = [
    Icon9,
    Icon10,
    Icon11,
    Icon12,
    Icon13,
    Icon14,
    Icon15,
    Icon16,
    Icon17,
  ];
  const repeatedItems1 = Array(5)
    .fill(bannerItems1)
    .flatMap((arr) => arr);
  const repeatedItems2 = Array(5)
    .fill(bannerItems2)
    .flatMap((arr) => arr);

  return (
    <div className="bg-gray-200 justify-center items-center my-auto xxl:pt-16 xxl:pb-10 xl:pt-16 xl:pb-0  lg:pt-16 lg:pb-6 md:pt-12 md:pb-0 sm:pt-12 sm:pb-0 xs:pt-10  hidden lg:block xxl:block xl:block md:block ">
      <div
        className="
                  grid grid-cols-1 
                  bg-gray-200
                  h-[100px] xs:h-[130px] sm:h-[160px] md:h-[200px] lg:h-[240px] xl:h-[260px]
                  space-y-11 my-auto
  "
      >
        {/* Heading */}
        <div
          className="
                  grid col-span-1 text-center
                  h-[2px] xs:h-[5px] xxl:mb-16 xl:mb-16 lg:mb-16 md:mb-10  sm:mb-6 xs:mb-3
"
        >
          <p
            className="
                  font-montserrat font-normal
                  text-[10px] xs:text-[12px] sm:text-[15px] md:text-[18px] lg:text-[20px] xl:text-[22px]
"
          >
            We take care of more than{" "}
            <span className="text-darkBlue underline ">300+</span> customers
          </p>
        </div>
        {/* Banner Items */}
        <div className="grid col-span-1 h-[200px]">
          {/* Upper banner */}
          <div
            className="box1 box1-size "
            style={{
              position: "absolute",
              left: 0,
              zIndex: 2,
              paddingBlock:{
                xxl:"8px",
                xl:"8px",
                lg:"5px",
                md:"10px",
                sm:"15px",
            
              },
              overflow: "hidden",
              width: "100%",
            }}
          >
            <motion.div
              className="text-5xl text-black space-between space-x-[4.2rem] xs:space-x-[1.5rem] sm:space-x-[3rem] md:space-x-[3.5rem] lg:space-x-[4rem] xl:space-x-[4.5rem] xxl:space-x-[5rem]"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "max-content",
                height: "100%",
              }}
              animate={{ x: ["-70%", "-10%"] }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              {repeatedItems1.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt=""
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              ))}
            </motion.div>
          </div>
          {/* Lower banner */}
          <div
            className="box2 box2-size"
            style={{
              position: "absolute",
              left: 0,
              zIndex: 1,
                paddingBlock:{
                xxl:"8px",
                xl:"8px",
                lg:"5px",
                md:"10px",
                sm:"15px",
            
              },
              overflow: "hidden",
              width: "100%",
            }}

          >
            <motion.div
              className="text-5xl text-black space-between space-x-[4.2rem] xs:space-x-[1.5rem] sm:space-x-[3rem] md:space-x-[3.5rem] lg:space-x-[4rem] xl:space-x-[4.5rem] xxl:space-x-[5rem]"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "max-content",
                height: "100%",
              }}
              animate={{ x: ["-70%", "-10%"] }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              {repeatedItems2.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt=""
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
