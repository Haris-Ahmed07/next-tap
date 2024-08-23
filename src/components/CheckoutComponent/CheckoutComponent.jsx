import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Check } from "@mui/icons-material";
import { Link } from "react-router-dom";
import CheckOutCartItems from "./CheckOutCartItems";
import { useSelector } from "react-redux";

const CheckoutComponent = () => {
  const cartItems = useSelector((state) => state.cart);
  const [discount, setDiscount] = useState(0);

  const [formValues, setFormValues] = useState({
    email: "",
    emailChecked: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    phone: "",
    textChecked: "",
  });
  const countries = ["Pakistan", "India", "UK", "USA", "Canada"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    alert("Form Submitted");
  };

  const handleDiscount = (e) => {
    e.preventDefault();
    let discountValue = document.getElementById("discount").value;
    setDiscount(discountValue);
  };

  const handleDiscountCodeSubmit = () => {};
  return (
    <div
    >
      <div className="grid grid-cols-2 w-full h-full ">
  
        {/* LEFT SIDE */}
        <div className="h-full xs:col-span-2 md:col-span-1   xxl:ps-24 xl:ps-16 lg:ps-12 md:ps-6 sm:px-0 xs:px-0 xxl:pt-12 xxl:pb-16 xl:pt-12  xl:pb-16  lg:pt-10 lg:pb-16  md:pt-8 md:pb-16  sm:pt-[30px] sm:pb-[40px]  xs:pt-5 xs:pb-12  ">
 
          <Box
            sx={{
              maxWidth: {
                xs: "90%",
                sm: "90%",
                lg: "90%",
                xl: "90%",
                xxl: "90%",
              },
              mx: "auto",
              mt: 1,
            }}
          >
               <div className=" sm:ml-[2%] xs:ml-[1rem] xxl:mb-10 xl:mb-10 lg:mb-10 md:mb-8  sm:mb-8 xs:mb-6">
          <Link
            to="/cart"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              width: "150px",
            }}
          >
            <ArrowBackIosIcon sx={{ color: "#4A9EF4" }} />
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "21px",
                textAlign: "left",
                color: "#4A9EF4",
                ml: 1,
              }}
            >
              Return to cart
            </Typography>
          </Link>
        </div>
            <form onSubmit={handleSubmit}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "20.18px",
                  fontWeight: 600,
                  lineHeight: "25.2px",
                  textAlign: "left",
                  marginBottom: "1rem",
                }}
              >
                Contact
              </Typography>
              <Grid container spacing={2} marginBottom="2rem">
                {/* Email */}
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="phone">Email</InputLabel>
                    <OutlinedInput
                      id="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      label="Email"
                    />
                  </FormControl>
                </Grid>
                {/* Check Box */}
                <Grid item xs={12} textAlign="start">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formValues.emailChecked}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            emailChecked: e.target.checked,
                          })
                        }
                        name="emailChecked"
                        color="primary"
                      />
                    }
                    label="Email me with news and offers"
                  />
                </Grid>
              </Grid>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "20.18px",
                  fontWeight: 600,
                  lineHeight: "25.2px",
                  textAlign: "left",
                  marginBottom: "1rem",
                }}
              >
                Shipping address
              </Typography>
              <Grid container spacing={2}>
                {/* Country */}
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="country-label">Country</InputLabel>
                    <Select
                      labelId="country-label"
                      name="country"
                      id="country"
                      value={formValues.country}
                      onChange={handleChange}
                      label="Country"
                      sx={{ textAlign: "left" }}
                    >
                      {countries.map((countryName) => (
                        <MenuItem key={countryName} value={countryName}>
                          {countryName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                {/* First Name */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <OutlinedInput
                      id="firstName"
                      name="firstName"
                      value={formValues.firstName}
                      onChange={handleChange}
                      label="First Name"
                    />
                  </FormControl>
                </Grid>
                {/* Last Name */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <OutlinedInput
                      id="lastName"
                      name="lastName"
                      value={formValues.lastName}
                      onChange={handleChange}
                      label="Last Name"
                    />
                  </FormControl>
                </Grid>
                {/* Address */}
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="address">Address</InputLabel>
                    <OutlinedInput
                      id="address"
                      name="address"
                      type="address"
                      value={formValues.address}
                      onChange={handleChange}
                      label="address"
                    />
                  </FormControl>
                </Grid>
                {/* Apartment */}
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="apartment">
                      Apartment, suite, etc. (optional)
                    </InputLabel>
                    <OutlinedInput
                      id="apartment"
                      name="apartment"
                      type="text"
                      value={formValues.apartment}
                      onChange={handleChange}
                      label="apartment"
                    />
                  </FormControl>
                </Grid>
                {/* City */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="firstName">City</InputLabel>
                    <OutlinedInput
                      id="city"
                      name="city"
                      value={formValues.city}
                      onChange={handleChange}
                      label="City"
                    />
                  </FormControl>
                </Grid>
                {/* Postal Code */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="lastName">
                      Last Postal code (optional)
                    </InputLabel>
                    <OutlinedInput
                      id="postalCode"
                      name="postalCode"
                      value={formValues.postalCode}
                      onChange={handleChange}
                      label="Postal Code"
                    />
                  </FormControl>
                </Grid>
                {/* Phone */}
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="phone">Your phone</InputLabel>
                    <OutlinedInput
                      id="phone"
                      name="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                      label="Your phone"
                    />
                  </FormControl>
                </Grid>
                {/* Check Box */}
                <Grid item xs={12} textAlign="start">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formValues.textChecked}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            textChecked: e.target.checked,
                          })
                        }
                        name="textChecked"
                        color="primary"
                      />
                    }
                    label="Text me with news and offers"
                  />
                </Grid>
                {/* Order Button */}
                <Grid
                  item
                  xs={12}
                  sx={{ textAlign: { xs: "center", md: "end" } }}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      height: "60px",
                      width: "272px",
                      borderRadius: "16px",
                      bgcolor: "#1A1A1A",
                    }}
                  >
                    ORDER
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </div>
        {/* RIGHT SIDE */}
        <div className="h-full xs:col-span-2 md:col-span-1  bg-gray-100 border-s border-gray-200 xxl:pt-12 xxl:pb-16 xl:pt-12  xl:pb-16  lg:pt-10 lg:pb-16  md:pt-12 md:pb-16  sm:pt-[40px] sm:pb-[30px]  xs:pt-10 xs:pb-8 xxl:pe-24 xl:pe-16 lg:pe-12 md:pe-6  sm:px-0 xs:px-0">
          <Box
            sx={{
              maxWidth: {
                xs: "90%",
                sm: "90%",
                lg: "90%",
                xl: "90%",
                xxl: "90%",
              },
              minHeight: 600,
              mx: "auto",
              mt: 1,
            }}
          >
            <div className="grid grid-cols-1 space-y-3 mx-2">
              {/* Delivery Date */}
              <div className="col-span-1">
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "17px",
                    fontWeight: 600,
                    lineHeight: "21px",
                    textAlign: "left",
                    color: "#000000",
                  }}
                >
                  Estimated Delivery Date: July 31 - August 07
                </Typography>
              </div>

              {/* Items */}
              <div className="col-span-1">
                <Box
                  sx={{
                    width: "100%",
                    height: 250,
                    overflowY: "scroll",
                    paddingX: "1rem",
                  }}
                >
                  {cartItems.length > 0 ? (
                    <>
                      {cartItems.map((item) => (
                        <CheckOutCartItems
                          quantity={item.quantity}
                          cardType={item.cardType}
                          color={item.color}
                          price={item.price}
                          id={item.id}
                          image={item.cardImg}
                        />
                      ))}
                    </>
                  ) : (
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{
                        fontSize: {
                          xl: "18px",
                          lg: "18px",
                          md: "15px",
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
              </div>
              {/* Discount Coupon */}
              <div className="col-span-1">
                <form onSubmit={handleDiscountCodeSubmit}>
                  <div className="flex justify-between space-x-4">
                    <FormControl fullWidth variant="outlined">
                      <InputLabel htmlFor="phone">
                        Discount code or gift card
                      </InputLabel>
                      <OutlinedInput
                        id="discount"
                        name="discount"
                        label="discount"
                      />
                    </FormControl>
                    {/* Discount Button */}
                    <Button
                      variant="contained"
                      type="submit"
                      onClick={handleDiscount}
                      sx={{
                        height: "51px",
                        width: "69px",
                        borderRadius: "6px",
                        bgcolor: "#D6D6D6",
                        color: "#666666",
                      }}
                    >
                      Apply
                    </Button>
                  </div>
                </form>
              </div>
              {/* Details */}
              <div className="col-span-1">
                <div className="space-y-3">
                  {/* Subtotal Price */}
                  <div className="flex justify-between items-center">
                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: {
                          xl: "18px",
                          lg: "18px",
                          md: "15px",
                          sm: "15px",
                          xs: "13px",
                        },
                        fontWeight: 400,
                        lineHeight: "21px",
                        textAlign: "left",
                        color: "#000000",
                      }}
                    >
                      Subtotal
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13.78px",
                        fontWeight: 400,
                        lineHeight: "21px",
                        textAlign: "right",
                        color: "#000000",
                      }}
                    >
                      $
                      {cartItems.reduce(
                        (acc, item) => acc + item.price.slice(1) * item.quantity,
                        0
                      )}
                    </Typography>
                  </div>
                  {/* Shipping Price */}
                  <div className="flex justify-between items-center">
                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: {
                          xl: "18px",
                          lg: "18px",
                          md: "15px",
                          sm: "15px",
                          xs: "13px",
                        },
                        fontWeight: 400,
                        lineHeight: "21px",
                        textAlign: "left",
                        color: "#000000",
                      }}
                    >
                      Shipping
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13.78px",
                        fontWeight: 400,
                        lineHeight: "21px",
                        textAlign: "right",
                        color: "#000000",
                      }}
                    >
                      $
                      {cartItems.reduce(
                        (acc, item) => acc + 2 * item.quantity,
                        0
                      )}
                    </Typography>
                  </div>
                  {/* Discount */}
                  <div className="flex justify-between items-center">
                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: {
                          xl: "18px",
                          lg: "18px",
                          md: "15px",
                          sm: "15px",
                          xs: "13px",
                        },
                        fontWeight: 400,
                        lineHeight: "21px",
                        textAlign: "left",
                        color: "#000000",
                      }}
                    >
                      Discount
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13.78px",
                        fontWeight: 400,
                        lineHeight: "21px",
                        textAlign: "right",
                        color: "#000000",
                      }}
                    >
                      $
                      {discount}
                    </Typography>
                  </div>
                  {/* Total Price */}
                  <div className="flex justify-between items-center">
                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "18.26px",
                        fontWeight: 600,
                        lineHeight: "28.5px",
                        textAlign: "left",
                        color: "#000000",
                      }}
                    >
                      Total
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "18.26px",
                        fontWeight: 600,
                        lineHeight: "28.5px",
                        textAlign: "left",
                        color: "#000000",
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
                        ) -
                        discount}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
