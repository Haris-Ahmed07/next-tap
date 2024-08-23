import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import card1 from "/assets/card1.svg";

const Cards = () => {
  const cardStyle1 = {};
  const cardStyle2 = {
    translateX: 20,
    translateY: -15,
    scale: 1.03,
    rotate: 13,
  };
  const cardStyle3 = {
    translateX: 30,
    translateY: -20,
    scale: 1.03,
    rotate: 24,
  };
  const cardStyle4 = {
    translateX: 40,
    translateY: -25,
    scale: 1.03,
    rotate: 34,
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className="my-component xxl:pt-[6rem]  xl:pt-[6rem] lg:pt-[6rem] md:pt-[10%]  md:h-[25rem] sm:h-[21.5rem] sm:pt-[4rem] xs:h-[30vh] xs:pt-[5rem]"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img className="absolute ml-[1rem] lg:w-[47%] md:w-[40%] xs:w-[70%] sm:w-[60%]" src={card1} alt="Card" />
        <motion.img
          className="absolute ml-[2rem] card mb-[2rem] lg:w-[47%] md:w-[40%] xs:w-[70%] sm:w-[60%]"
          animate={isHovered ? cardStyle2 : { rotate: 9 }}
          src={card1}
          alt="Card"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.img
          className="absolute ml-[4.6rem] mb-[3.4rem] lg:w-[47%] md:w-[40%] xs:w-[70%] sm:w-[60%]"
          animate={isHovered ? cardStyle3 : { rotate: 20 }}
          src={card1}
          alt="Card"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.img
          className="absolute ml-[7.5rem] mb-[4rem] lg:w-[47%] md:w-[40%] xs:w-[70%] sm:w-[60%]"
          animate={isHovered ? cardStyle4 : { rotate: 30 }}
          src={card1}
          alt="Card"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Cards;