import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import card1 from "../../assets/card1.svg";

const Cards = () => {
  const cardStyle1 = {};
  const cardStyle2 = {
    translateX: 5,
    translateY: 20,
    translateZ: -300,
    scale: 1.05,
    rotate: 12,
  };
  const cardStyle3 = {
    translateX: 2,
    translateY: 10,
    translateZ: -300,
    scale: 1.05,
    rotate: 24,
  };
  const cardStyle4 = {
    translateX: 2,
    translateY: 10,
    translateZ: -300,
    scale: 1.05,
    rotate: 36,
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
          className="absolute ml-[2rem] card mb-[4rem] lg:w-[47%] md:w-[40%] xs:w-[70%] sm:w-[60%]"
          animate={isHovered ? cardStyle2 : { rotate: 9 }}
          src={card1}
          alt="Card"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.img
          className="absolute ml-[7rem] mb-[4.5rem] lg:w-[47%] md:w-[40%] xs:w-[70%] sm:w-[60%]"
          animate={isHovered ? cardStyle3 : { rotate: 20 }}
          src={card1}
          alt="Card"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.img
          className="absolute ml-[12rem] mb-[6rem] lg:w-[47%] md:w-[40%] xs:w-[70%] sm:w-[60%]"
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