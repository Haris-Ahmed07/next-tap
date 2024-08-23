import React from "react";
import { Grid, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "@mui/material";
import { SiYoutubemusic } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import logo2 from "/assets/logo2.png";

const data = [
  {
    options: [
      "NFC Business Card",
      "Digital Cards",
      "Earn with Us",
      "Generate QR Code",
      "Book a Meeting",
    ],
  },
  {
    options: [
      "Privacy Policy",
      "Refund Policy",
      "Shipping Policy",
      "Subscription Policy",
      "Terms of Service",
    ],
  },
  {
    options: ["FAQs", "Contact", "Returns", "Delivery", "News"],
  },
];

const Footer = () => {
  return (
    <div className="bg-white">
      <Grid
        container
        className="text-gray-700 xxl:mt-2 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 xs:mt-0 text-[0.5rem] lg:text-xl"
        sx={{
          backgroundColor: "white",
          color: "black",
          py: 0,
          px: {
            xs: "3.5rem",
            md: "3.5rem",
            lg: "3.5rem",
          },
        }}
      >
        {/* TOP CONTAINER */}
        <Grid
          container
          item
          xs={12}
          md={12}
          lg={12}
          className="xs:pt-11 overflow-hidden"
        >
          {/* LEFT SIDE */}
          <Grid container item xs={12} md={12} sm={12} lg={6} xl={6}>
            <Grid container item xs={12} sm={12} md={12} lg={12} className="xxl:h-[100px] xl:h-[100px] lg:h-[200px]" >
              {/* Left & Top */}
              <Grid container item xs={12} sm={12} md={12} lg={12} className="xxl:h-[80px] xl:h-[80px] lg:h-[80px] ">
                <div
                  style={{ width: "100%", fontSize: "0.8rem" }}
                  className=" xxl:pe-16 xxl:ps-10 xl:pe-12 xl:ps-8 lg:pe-6 lg:ps-16 md:pe-16 md:ps-16"
                >
                  <form className="d-flex ps-[40px] xs:ps-[0px]">
                    <Grid container >
                      <Grid
                        item
                        xs={12}
                        sm={7}
                        xl={7}
                        md={7}
                        lg={7}
                        sx={{
                          height: {
                            xs: "3.8rem",
                            md: "3.8rem",
                            lg: "3.8rem",
                            xl: "3.8rem",
                          },
                          width: {
                            xs: "100%",
                            md: "100%",
                            lg: "100%",
                            xl: "100%",
                          },
                        }}
                        className="xs:flex xs:justify-start"
                      >
                        <input
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                          className="
                            form-control
                            px-5
                            rounded-xl
                            outline-1
                            bg-gray-100
                            h-12 xs:h-[100%]
                            w-full
                            text-[18px] xs:text-[12px] sm:text-[15px] md:text-[18px] lg:text-[20px] xl:text-[22px]
                          "
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        xl={5}
                        sm={5}
                        md={5}
                        lg={5}
                        sx={{
                          height: {
                            xs: "3.8rem",
                            md: "3.8rem",
                            lg: "3.8rem",
                            xl: "3.8rem",
                          },
                          width: {
                            xs: "100%",
                            md: "100%",
                            lg: "100%",
                            xl: "100%",
                          },
                        }}
                        className="xs:flex xs:justify-start md:justify-start"
                      >
                        <button
                          type="submit"
                          className="
                                  btn
                                  bg-darkBlue
                                  text-white
                                  text-[18px] xs:text-[12px] sm:text-[15px] md:text-[15px] lg:text-[20px] xl:text-[22px]
                                  h-12 xs:h-[100%]
                                  w-[100%] xs:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] xxl:w-[100%]
                                  rounded-2xl
                                  xs:mb-6F
                                  "
                        >
                          <span className="font-bold">SUBSCRIBE</span>
                        </button>
                      </Grid>
                    </Grid>
                  </form>
                </div>
              </Grid>
              {/* Left & Bottom */}
              <Grid container item xs={12} md={12} lg={12}>
                <div className="flex flex-col xxl:pb-0 xl:pb-0 lg:pb-5 md:pb-0 xxl:px-0 xl:px-0 lg:ps-[5%] lg:pe-[12.5%]  md:ps-[5%] md:pe-[11%] md:flex-row lg:flex-row items-start md:items-center w-full md:gap-4">
                  <div className="flex items-start   xxl:justify-start xl:justify-start  lg:justify-start md:justify-start  sm:justify-center  xs:justify-center w-full md:w-1/2 xxl:mb-4 xl:mb-4  lg:mb-4 md:mb-0 sm:mb-0 xs:mb-0 md:mr-[30px] xxl:py-5 xl:py-5 lg:py-5 md:py-5 sm:py-2 xs:py-0">
                    <img
                      src={logo2}
                      alt=""
                      className="w-[250px] h-[120px] md:w-[200px] md:h-[100px]"
                    />
                  </div>
                  <div className="flex flex-col justify-start xxl:items-start xl:items-start lg:items-end md:items-end sm:items-center xs:items-center w-full md:w-1/2">
                    <Button
                      style={{
                        paddingInlineStart: "0",
                        fontSize: "0.9rem",
                      }}
                      variant="h6"
                      gutterBottom
                      sx={{
                        textTransform: "none",
                        justifyContent: "flex-start",
                      }}
                    >
                      <span className="text-gray-900 font-extrabold text-start">
                        Office:
                      </span>
                    </Button>
                    <Button
                      style={{
                        paddingInlineStart: "0",
                        fontSize: "0.9rem",
                      }}
                      variant="h6"
                      gutterBottom
                      sx={{
                        textTransform: "none",
                        justifyContent: "flex-start",
                      }}
                    >
                      <span className="text-gray-900 font-extrabold text-start">
                        Telephone:
                      </span>
                    </Button>
                    <Button
                      style={{
                        paddingInlineStart: "0",
                        fontSize: "0.9rem",
                      }}
                      variant="h6"
                      gutterBottom
                      sx={{
                        textTransform: "none",
                        justifyContent: "flex-start",
                      }}
                    >
                      <span className="text-gray-900 font-extrabold text-start">
                        Email:
                      </span>
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>

            {/* Right % Bottom */}
            <Grid item xs={12} md={1} lg={1} className=""></Grid>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid
            container
            item
            xs={12}
            md={12}
            sm={12} 
            lg={6}
            xl={6}
            className=" py-2 pb-10  xs:ps-0 sm:ps-0 md:ps-0 xxl:mt-0 xl:mt-0 lg:mt-16 md:mt-10 "
          >
            {/* First set of items */}
            {data.slice(0, 3).map((item) => (
              <Grid
                item
                xs={12}
                md={4}
                lg={4}
                style={{ flexDirection: "column" }}
                className="flex flex-col xxl:items-start xl:items-start lg:items-center md:items-center sm:items-center xs:items-center pb-5"
              >
                {item.options.map((option) => (
                  <div>
                    <Button
                      className="pb-5"
                      style={{
                        paddingBlock: "5px",
                        paddingInline: "30px",
                        fontSize: "1rem",
                      }}
                      variant="h6"
                      gutterBottom
                      sx={{ textTransform: "none" }}
                    >
                      <span className="text-gray-900 text-[16px] font-thin xs:text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]">
                        {option}
                      </span>
                    </Button>
                  </div>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <div className="flex space-x-4 justify-center items-center ">
        <FaLinkedin size={30} />
        <FaFacebookSquare size={30} />
        <SiYoutubemusic size={30} />
        <FaInstagramSquare size={30} />
      </div>

      <div className="text-gray-900 py-6 font-thin text-[20px] text-center">
        Copyright © 2024 - NextTap
      </div>
    </div>
  );
};

export default Footer;
