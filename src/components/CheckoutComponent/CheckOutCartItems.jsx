import React, { useEffect } from "react";
import cartItemImage1 from "../../assets/cartItemImage1.svg";
import cartItemImage2 from "../../assets/cartItemImage2.svg";
import { Typography } from "@mui/material";
const CheckOutCartItems = (props) => {
  useEffect(()=>{
    console.log(props);
  },[])

  return (
    <div>
      <div className="col-span-1">
        <div className="flex justify-between mx-2 my-4">
          <div className="flex space-x-3 ">
            <div className="relative inline-block">
              <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-[#666666] border rounded-[50%] font-montserrat font-bold text-[13px] text-white h-[25px] w-[25px] flex justify-center items-center">
                {props.quantity}
              </div>
              <div
                className="items-center justify-center flex"
                style={{
                  border: "1px solid #D6D6D6",
                  backgroundColor: "#EDEDED",
                }}
              >
                <img
                  // src={
                  //   props.color === "Black"
                  //     ? cartItemImage1
                  //     : props.color === "White"
                  //     ? cartItemImage2
                  //     : ""
                  // }
                  // src={
                  //   cartItemImage1
                  // }
                  src={props.image}
                  
                  alt={
                    props.color === "black"
                      ? "Image for black item"
                      : props.color === "White"
                      ? "Image for white item"
                      : "No image available"
                  }
                  className="h-[64px] w-[64px]"
                />
              </div>
            </div>

            <div>
              <Typography
                sx={{ font: "Inter", fontSize: 14, color: "#000000" }}
              >
                {props.cardType}
              </Typography>
              <Typography
                sx={{ font: "Inter", fontSize: 11, color: "#666666", textAlign:"left" }}
              >
                {props.color}
              </Typography>
            </div>
          </div>
          <div>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13.78px",
                fontWeight: 400,
                lineHeight: "21px",
                textAlign: "left",
                color: "#000000",
              }}
            >
              ${props.quantity * props.price.slice(1)}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutCartItems;
