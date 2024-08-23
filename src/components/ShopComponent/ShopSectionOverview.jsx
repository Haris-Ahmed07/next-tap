import React, { useState } from "react";
import { Grid } from "@mui/material";
import ShopCard from "../ShopCard/ShopCard.jsx";
import { cards } from "../../data.js";
import { Link } from "react-router-dom";

const ShopSectionOverview = (props) => {

  return (
    <div className="bg-gray-200 min-h-[700px] w-full xxl:pb-16 xl:pb-12 lg:pb-10 md:pb-10 sm:pb-10 xs:pb-8 xs:pt-6 xxl:pt-16 xl:pt-16 lg:pt-12 md:pt-12 sm:pt-10 ">
      <h1 className="xxl:text-[40px] xl:text-[40px] lg:text-[37px] md:text-[33px] sm:text-[30px] xs:text-[27px] font-montserrat text-center font-semibold  ">
        {props.title}
      </h1>
      <p className="xxl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px] font-montserrat text-center px-8 ">
        Experience the Future of Connectivity with Our NFC Cards; Seamless
        Connect, Share, and Network with Just a Tap
      </p>
      <section className="w-full min-h-[440px] flex flex-row justify-center mx-auto xxl:px-20 xl:px-16 lg:px-10 md:px-6 sm:px-6 xs:px-4 xxl:mt-10 xl:mt-10 lg:mt-10 xs:mt-8">
        <Grid
          container
          columnSpacing={{
            xl: "8px",
            lg: "6px",
            md: "8px",
            sm: "8px",
            xs: "4px",
          }}
          className=""
        >
          {cards.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} index={index}>
              <ShopCard
                image={item.image}
                title={item.title}
                price={item.price}
                id={item.id}
              />
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
  );
};

export default ShopSectionOverview;
