import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import card1 from "../../assets/card1.svg";

const Cards = () => {
  const cardStyle1 = {};
  const cardStyle2 = {
    translateX: 30,
    translateY: 10,
    translateZ: -300,
    scale: 1.05,
    rotate: 12,
  };
  const cardStyle3 = {
    translateX: 40,
    translateY: 10,
    translateZ: -300,
    scale: 1.05,
    rotate: 24,
  };
  const cardStyle4 = {
    translateX: 50,
    translateY: 10,
    translateZ: -300,
    scale: 1.05,
    rotate: 36,
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className="my-component mt-11 pt-[6rem] "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          overflow: "hidden",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img className="absolute" src={card1} alt="Card" />
        <motion.img
          className="absolute first-card mb-[4rem]"
          animate={isHovered ? cardStyle2 : { rotate: 9 }}
          src={card1}
          alt="Card"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.img
          className="absolute  mb-[4.5rem]"
          animate={isHovered ? cardStyle3 : { rotate: 20 }}
          src={card1}
          alt="Card"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.img
          className="absolute mb-[6rem]"
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
