import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.cart);
  const visibleItems = cartItems.filter((item) => item.quantity > 0);
  return (
    <div className="xxl:mt-[4rem] xl:mt-[4rem] lg:mt-[3.5rem] md:mt-[3rem]  sm:mt-[3rem] xs:mt-[2.5rem] w-full text-center">
      <Typography className="xxl:text-[40px] xl:text-[40px] lg:text-[37px] md:text-[33px] sm:text-[30px] xs:text-[27px]"
        sx={{
          fontFamily: "Montserrat",
          fontWeight: 600,
            fontSize: {
              xl: "40px",
              lg: "37px",
              md: "33px",
              sm: "30px",
              xs: "27px",
            },
          lineHeight: "24px",
          textAlign: "center",
          color: "#000000CC",
        }}
      >
        CART
      </Typography>

      {/* Main Section */}
      <div className="flex flex-col items-center justify-center xxl:mt-16 xl:mt-16 lg:mt-12 md:mt-10 sm:mt-8 xs:mt-8 xxl:px-16 xl:px-16 lg:px-10 md:px-6 sm:px-2 ">
        <Grid container spacing={3} >
          {/* LEFT SIDE */}
          <Grid item xs={12} sm={12} md={7} lg={7} xl={7} >
            <div className="flex justify-between items-center pl-5 pr-11">
              {["Product", "Quantity", "Total"].map((item) => (
                <Typography
                  key={item} // Added key prop to avoid React warning
                  variant="h6"
                  sx={{
                    height: "30px",
                    fontFamily: "Montserrat",
                    fontSize: {
                      xl: "22px",
                      lg: "20px",
                      md: "18px",
                      sm: "15px",
                      xs: "13px",
                    },
                    fontWeight: "600",
                    lineHeight: "24px",
                    textAlign: "center",
                    color: "#000000",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </div>
            <hr
              className="w-[96%] h-[1px] bg-[#000000CC]"
              style={{
                borderColor: "#AEAEAE",
                marginBottom: "0.8rem",
                borderHeight: "0.5px",
                borderStyle: "solid",
                marginLeft: "1rem",
              }}
            />

            <Grid container item xs={12}>
              <Box
                sx={{
                  width: "100%",
                  height: 480,
                  overflowY: "scroll",
                  paddingX: "1rem",
                }}
              >
                {visibleItems.length > 0 ? (
                  visibleItems.map((item, index) => (
                    <Grid item xs={12} key={item.id || index}>
                      <CartItem item={item} />
                    </Grid>
                  ))
                ) : (
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{
                      fontSize: {
                        xl: "22px",
                        lg: "20px",
                        md: "18px",
                        sm: "15px",
                        xs: "13px",
                      },
                      marginTop: 2,
                    }}
                  >
                    No items in the cart.
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} >
            <div className=" xxl:space-y-8 xl:space-y-8  lg:space-y-8  md:space-y-6  sm:space-y-8 xs:space-y-6 xxl:ps-10 xl:ps-8 lg:ps-6 md:px-4 sm:px-2 xs:px-2">
              {/* Buttons */}
              <div className="space-y-3">
                <div>
                  <Link
                    to="/checkout"
                    style={{
                      display: "block", 
                      backgroundColor: "#0069C0",
                      width: "100%",
                      height: "60px",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "15px",
                      lineHeight: "30px",
                      borderRadius: "12px",
                      padding: "20px 16px",
                      textDecoration: "none",
                      textAlign: "center",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontSize: {
                          xl: "18px",
                          lg: "18px",
                          md: "15px",
                          sm: "15px",
                          xs: "13px",
                        },
                        fontWeight: 700,
                        lineHeight: "17.68px",
                        letterSpacing: "0.136px",
                        textAlign: "center",
                      }}
                    >
                      CHECK OUT
                    </Typography>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/shop">
                  <button
                    type="submit"
                    className="bg-white w-full h-[60px] text-black font-bold text-[15px] leading-[30px] rounded-2xl px-4 py-3 border border-black"
                  >
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontSize: {
                          xl: "18px",
                          lg: "18px",
                          md: "15px",
                          sm: "15px",
                          xs: "13px",
                        },
                        fontWeight: 700,
                        lineHeight: "17.68px",
                        letterSpacing: "0.136px",
                        textAlign: "center",
                      }}
                    >
                      CONTINUE SHOPPING
                    </Typography>
                  </button></Link>
                </div>
              </div>

              {/* Info */}
              <div className="xxl:space-y-6 xl:space-y-6 lg:space-y-6 md:space-y-5 sm:space-y-5 xs:space-y-4">
                <div className="flex justify-between items-center text-gray-800">
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: {
                        xl: "18px",
                        lg: "18px",
                        md: "15px",
                        sm: "15px",
                        xs: "13px",
                      },
                      fontWeight: 600,
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#696969",
                    }}
                  >
                    Subtotal
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: {
                        xl: "18px",
                        lg: "18px",
                        md: "15px",
                        sm: "15px",
                        xs: "13px",
                      },
                      fontWeight: 500,
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#696969",
                    }}
                  >
                    $
                    {cartItems.reduce(
                      (acc, item) => acc + item.price.slice(1) * item.quantity,
                      0
                    )}
                    .00
                  </Typography>
                </div>
                <div className="flex justify-between items-center text-gray-800">
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: {
                        xl: "22px",
                        lg: "20px",
                        md: "18px",
                        sm: "15px",
                        xs: "13px",
                      },
                      fontWeight: 600,
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#696969",
                    }}
                  >
                    Delivery Charges
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: {
                        xl: "22px",
                        lg: "20px",
                        md: "18px",
                        sm: "15px",
                        xs: "13px",
                      },
                      fontWeight: 500,
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#696969",
                    }}
                  >
                    $
                    {cartItems.reduce(
                      (acc, item) => acc + 2 * item.quantity,
                      0
                    )}
                    .00
                  </Typography>
                </div>
                <div className="flex justify-between items-center font-bold">
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: {
                        xl: "22px",
                        lg: "20px",
                        md: "18px",
                        sm: "15px",
                        xs: "13px",
                      },
                      fontWeight: 600,
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#000000",
                    }}
                  >
                    Total
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: {
                        xl: "22px",
                        lg: "20px",
                        md: "18px",
                        sm: "15px",
                        xs: "13px",
                      },
                      fontWeight: 700,
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#0C0C0C",
                    }}
                  >
                    $
                    {cartItems.reduce(
                      (acc, item) => acc + item.price.slice(1) * item.quantity,
                      0
                    ) +
                      cartItems.reduce(
                        (acc, item) => acc + 2 * item.quantity,
                        0
                      )}
                    .00
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CartComponent;
