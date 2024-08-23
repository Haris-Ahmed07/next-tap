import React from "react";
import { Typography } from "@mui/material";
import TableWithSearch from "./TableWithSearch";
import { compatiblePhonesData } from "../../data.js"

const CompatiblePhonesComponent = () => {
  
  return (
    <div className="mx-auto my-auto xxl:space-y-11 xl:space-y-11 lg:space-y-11 md:space-y-8 sm:space-y-5 xs:space-y-5 bg-gray-100 xxl:px-10 xxl:pt-16 xl:px-0 xl:pt-16 lg:px-0 lg:pt-16 md:px-0 md:pt-12 sm:px-8 sm:pt-12 xs:px-4 xs:pt-10 xxl:pb-12 xl:pb-10 lg:pb-12 md:pb-16 sm:pb-12 xs:pb-12">
      {/* Heading */}
      <div className="xxl:space-y-8 xl:space-y-8 lg:space-y-8 md:space-y-5 sm:space-y-3 xs:space-y-3 xs:mx-1 sm:mx-1 md:mx-11 lg:mx-11">
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 600,
            lineHeight: "40px",
            textAlign: "center",
            color: "#000000CC",
            fontSize: {
              xs: "27px",
              sm: "30px",
              md: "33px",
              lg: "37px",
              xl: "40px",
            },
          }}
        >
          NFC Supported Gadgets
        </Typography>

        <Typography 
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 400,
            lineHeight: {
              xs: "27px",
              sm: "30px",
              md: "35px",
              lg: "35px",
              xl: "35px",
            },
            textAlign: "center",
            color: "#000000CC",
            fontSize: {
              xs: "13px",
              sm: "15px",
              md: "18px",
              lg: "20px",
              xl: "20px",
            },
            paddingInline: {
              xs: "13px",
              sm: "15px",
              md: "18px",
              lg: "40px",
              xl: "30px"
        
            },
          }}
        >
          Here is the list of all the smartphones and tablets with the feature
          of NFC. List of NFC supported gadgets makes it easy for the users to
          choose the best device for them. Explore below
        </Typography>
      </div>
      {/* Table */}
      <div>
        <TableWithSearch data={compatiblePhonesData} />
      </div>
    </div>
  );
};

export default CompatiblePhonesComponent;
