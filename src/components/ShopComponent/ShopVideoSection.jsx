import React from "react";
import { Box, Typography } from "@mui/material";
import shopVideoImg from "/assets/shopVideo.svg";
import { Link } from "react-router-dom";
import video from "/assets/videosection.mp4"
const ShopVideoSection = () => {
  return (
    <div className="xxl:px-32 xs:px-6 sm:px-8 md:px-8 lg:px-10 xl:px-16 xxl:py-16 xl:py-10 lg:py-8 md:py-10 sm:py-8 xs:py-6 mx-auto my-auto justify-center items-center bg-white flex ">
      <div className="grid grid-cols-2 xxl:gap-x-[5rem] xl:gap-x-[4rem] lg:gap-x-[3rem] md:gap-x-[2rem] sm:gap-y-[2rem] xs:gap-y-[1rem] items-center justify-center">
        <div className="col-span-1 xs:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1 xxl:col-span-1 justify-center">
          <Box className="600">
            <video src={video} alt="" controls/>
          </Box>
        </div>
        <div className="col-span-1 xs:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1 xxl:col-span-1 ">
          <Box className="space-y-5">
            <Typography className="xxl:text-[40px] xl:text-[40px] lg:text-[37px] md:text-[33px] sm:text-[30px] xs:text-[27px]"
              style={{
                fontFamily: "Montserrat",
                fontSize: "35px",
                fontWeight: 600,
                lineHeight: "45.8px",
                letterSpacing: "-0.96px",
                textAlign: "left",
                color: "#1A1A1A",
              }}
            >
              Tap Or scan to share instantly
            </Typography>

            <Typography className="xxl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px]"
              style={{
                fontFamily: "Montserrat",
              
                fontWeight: 400,
                lineHeight: "27.2px",
                textAlign: "left",
                color: "#1A1A1A",
              }}
            >
              Virtualtaps devices allow you to share info to nearly any smartphone (iPhone or Android) as long as the phone can scan QR
              codes. Others don't need a Virtualtaps accessory or an app to receive your info!
            </Typography>

            <button className="bg-darkBlue rounded-xl my-2 px-10 py-3">
              <Link
                className="text-[17px] font-bold text-white transition-all"
                to="/make-your-own-card"
              >
                DESIGN YOUR CARD
              </Link>
            </button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ShopVideoSection;
