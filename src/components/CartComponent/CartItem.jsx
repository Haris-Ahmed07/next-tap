import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import cartItemImage from "/assets/cartItemImage.svg";
import {
  addItemQuantity,
  subtractItemQuantity,
} from "../../states/actions/actions";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../states/index.js";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { addToCart, removeFromCart } = bindActionCreators(actions, dispatch);

  const handleAddItem = () => {
    dispatch(addItemQuantity(item.id));
  };
  const handleRemoveItem = () => {
    dispatch(subtractItemQuantity(item.id));
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="w-full">
      <Grid container>
        {/* Left */}
        <Grid item xs={4} className="flex space-x-7">
          <div>
            <img
              src={item.cardImg}
              alt={cartItemImage}
              className="h-[150px] w-[150px]"
            />
          </div>
          <div className="text-start space-y-2 text-xl flex flex-col justify-center items-center">
            <Typography
              sx={{
                gap: "0px",
                fontFamily: "Montserrat",
                fontSize: {
                  xl: "18px",
                  lg: "18px",
                  md: "15px",
                  sm: "15px",
                  xs: "12px",
                },
                fontWeight: 600,
                lineHeight: "24px",
                textAlign: "center",
                color: "#696969",
              }}
            >
              {item.cardType} ({item.color})
            </Typography>

            <Typography
              sx={{
                gap: "0px",
                fontFamily: "Inter",
                fontSize: {
                  xl: "22px",
                  lg: "20px",
                  md: "18px",
                  sm: "15px",
                  xs: "12px",
                },
                fontWeight: 500,
                lineHeight: "24px",
                color: "#030303",
              }}
            >
              {item.price}.00
            </Typography>
          </div>
        </Grid>
        {/* Middle */}
        <Grid
          item
          xs={4}
          paddingLeft="1.5rem"
          className="flex justify-center items-center"
        >
          <div
            className="flex justify-between items-center xxl:px-6 xl:px-5 lg:px-5 md:px-4 sm:px-3.5 xs:px-3 border border-gray-300 rounded-2xl
                        w-[45%] xs:w-[80%] sm:w-[65%] md:w-[70%] lg:w-[70%]
                        xs:h-[30px] sm:h-[36px] md:h-[40px]
                        xs:space-x-1"
          >
            <button
              className="font-semibold mb-1 xxl:text-[20px] xl:text-[20px] text-[20px] "
              onClick={handleRemoveItem}
            >
              -
            </button>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Inter",
                fontSize: {
                  xl: "22px",
                  lg: "20px",
                  md: "19px",
                  sm: "18px",
                  xs: "15px",
                },
                fontWeight: 500,
                textAlign: "center",
                color: "#696969",
              }}
            >
              {item.quantity}
            </Typography>
            <button
              className="font-semibold  mb-1 xxl:text-[18px] xl:text-[15px] text-[15px]"
              onClick={handleAddItem}
            >
              +
            </button>
          </div>
        </Grid>
        {/* Right */}
        <Grid
          item
          xs={4}
          textAlign="end"
          className="relative flex justify-end items-center"
        >
          <button className="absolute top-0 right-0" onClick={handleRemove}>
            <CloseIcon />
          </button>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Inter",
              fontSize: {
                xl: "22px",
                lg: "20px",
                md: "18px",
                sm: "15px",
                xs: "12px",
              },
              fontWeight: 500,
              lineHeight: "24px",
              color: "#030303",
            }}
          >
            ${parseInt(item.price.slice(1)) * item.quantity}.00
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartItem;
