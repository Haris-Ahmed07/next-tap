import React, { useEffect, useState } from 'react';
import contactPageBottomLogo from "../../assets/contactPageBottomLogo.svg";
import contactCircularBackground from "../../assets/contactCircularBackground.svg";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Link,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";

const ContactComponent = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    alert("Form Submitted");
  };

  const [bgImage, setBgImage] = useState('none');

  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth >= 1064 ? `url(${contactCircularBackground})` : 'none');
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Update on resize

    return () => window.removeEventListener('resize', handleResize);
  }, [contactCircularBackground]);

  return (
    <div className="xxl:px-[5%] xl:px-[3%] lg:px-[2%] md:px-[4%] sm:px-[3%] xs:px-[3%] mx-auto bg-gray-100">
      <div className="xxl:pt-0 xxl:pb-5 xl:pt-0 xl:pb-4 lg:pt-0 lg:pb-4 md:pt-0 md:pb-12 sm:pt-0 sm:pb-12 xs:pt-0 xs:pb-9 grid grid-cols-2 space-x-0">
        {/* LEFT SIDE */}
        <div className="col-span-1 xs:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1  flex items-center justify-center">
          <Box sx={{mx: "auto", mt: 5 }}>
            <Typography variant="h4" sx={{
                      fontFamily: "montserrat",
                      fontWeight: "600",
                      fontSize: {
                        xl: "40px",
                        lg: "37px",
                        md: "33px",
                        sm: "30px",
                        xs: "27px",
                      }}} gutterBottom>
              Contact our team
            </Typography>
            <Typography variant="body1"   gutterBottom>
              Tell us how we can help, and a member of our team will be in
              touch.{" "}
              <Link href="#" underline="hover">
                soon.
              </Link>
            </Typography>
            <form onSubmit={handleSubmit} className='xxl:mt-8 xl:mt-8 lg:mt-8 md:mt-8 sm:mt-8 xs:mt-8'>
              <Grid container spacing={2}>
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
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput
                      id="email"
                      name="email"
                      type="email"
                      value={formValues.email}
                      onChange={handleChange}
                      label="Email"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="phone">Phone</InputLabel>
                    <OutlinedInput
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formValues.phone}
                      onChange={handleChange}
                      label="Phone"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="country">Country</InputLabel>
                    <OutlinedInput
                      id="country"
                      name="country"
                      value={formValues.country}
                      onChange={handleChange}
                      label="Country"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="message">Your Message</InputLabel>
                    <OutlinedInput
                      id="message"
                      name="message"
                      value={formValues.message}
                      onChange={handleChange}
                      label="Your Message"
                      multiline
                      rows={4}
                    />
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    textAlign: {
                      xs: "center",
                      sm: "start",
                    },
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{
                      height: "60px",
                      width: "272px",
                      borderRadius: "16px",
                    }}
                  >
                    CONTACT US
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </div>
        {/* RIGHT SIDE */}
        <div
          className=" 
        col-span-1 xs:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 
        flex items-center justify-center 
        sm:bg-no-repeat sm:bg-cover sm:bg-center-top
        md:bg-no-repeat md:bg-cover md:bg-center-top
        lg:bg-no-repeat lg:bg-cover lg:bg-center-top
        xl:bg-no-repeat xl:bg-cover xl:bg-center-top
        xxl:bg-no-repeat xxl:bg-cover xxl:bg-center-top
      "
          style={{ backgroundImage: bgImage }}
        >
          <Box className="bg-white border border-gray-300 rounded-lg p-6 shadow-md xxl:w-[75%] xl:w-[85%] lg:w-[95%] mx-auto mt-5 space-y-5">
            <Typography variant="h6" className="mb-6">
              Revolutionizing Connectivity with NFC Cards
            </Typography>
            <ul className="list-none p-0 space-y-0">
              <li className="flex items-start xxl:text-[18px] xl:text-[18px] lg:text-[17px] md:text-[15px] sm:text-[15px] xs:text-[13px]">
                <span className="text-blue-500 mr-2">✓</span>
                Instantly share contact details with a tap.
              </li>
              <li className="flex items-start mb-2 xxl:text-[18px] xl:text-[18px] lg:text-[17px] md:text-[15px] sm:text-[15px] xs:text-[13px]">
                <span className="text-blue-500 mr-2">✓</span>
                Reduce paper waste with digital business cards.
              </li>
              <li className="flex items-start mb-2 xxl:text-[18px] xl:text-[18px] lg:text-[17px] md:text-[15px] sm:text-[15px] xs:text-[13px]">
                <span className="text-blue-500 mr-2">✓</span>
                Easily update your information without reprinting cards.
              </li>
              <li className="flex items-start mb-2 xxl:text-[18px] xl:text-[18px] lg:text-[17px] md:text-[15px] sm:text-[15px] xs:text-[13px]">
                <span className="text-blue-500 mr-2">✓</span>
                Personalize your NFC card to reflect your brand.
              </li>
            </ul>
            <Typography className="mt-4">
              Looking for product support instead?{" "}
              <Link href="#" className="text-blue-500">
                Contact support here
              </Link>
            </Typography>
            <Typography variant="body2" className="text-gray-500 mt-4 text-justify">
              Next Tap will only use your personal information to provide the
              product or service you requested and contact you with related
              content that may interest you. You may unsubscribe from these
              communications at any time. For more information on unsubscribing
              and how we protect and respect your privacy, check out our{" "}
              <Link href="#" className="text-blue-500">
                Privacy Policy
              </Link>
              .
            </Typography>
          </Box>
        </div>
        {/* Bottom */}
        <div className="col-span-2 flex items-center justify-center xxl:mt-18 xxl:mb-8 xl:mt-16 xl:mb-8 lg:mt-10 lg:mb-8 md:mt-6 md:mb-0 sm:mt-5 sm:mb-0 xs:mt-5 xs:mb-2 ">
          <div className="grid grid-cols-12 xxl:py-10 xxl:px-8 xl:py-10 xl:px-5
          lg:py-10 lg:px-5 md:py-6 md:px-5 sm:py-6 sm:px-5 xs:py-5 xs:px-5 xxl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-full xs:w-full h-auto border rounded-lg bg-[#63AEEC]  space-x-1 xs:space-y-4">
            <div className="xxl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-12  sm:col-span-12 xs:col-span-12 flex items-center xxl:justify-start xl:justify-start lg:justify-start md:justify-center sm:justify-center xs:justify-center ml-1">
              <img
                src={contactPageBottomLogo}
                alt="Logo"
                className="w-12 h-auto"
              />
            </div>
            <div className="xxl:col-span-7 xl:col-span-7 lg:col-span-7 md:col-span-12  sm:col-span-12  xs:col-span-12 flex xxl:items-start xl:items-start lg:items-start md:items-center sm:items-center justify-center xs:items-center flex-col xxl:space-y-5 xl:space-y-5 lg:space-y-3 md:space-y-3 sm:space-y-3 xs:space-y-2">
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: {
                    xs: "8px",
                    sm: "11px",
                    md: "12px",
                    lg: "14px",
                    xl: "22px",
                  },
                  fontWeight: 400,
                  lineHeight: { xs: "10px", sm: "12px" },
                  letterSpacing: "0.5px",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                PRODUCT SUPPORT
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: {
                    xs: "12px",
                    sm: "19px",
                    md: "20px",
                    lg: "23px",
                    xl: "22",
                  },
                  fontWeight: 400,
                  lineHeight: { xs: "16px", sm: "18px" },
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Looking for help & support?
              </Typography>
            </div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-12  sm:col-span-12 xs:col-span-12 flex items-center xxl:justify-end xl:justify-end lg:justify-end md:justify-center sm:justify-center xs:justify-center  my-auto">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  height: { xs: "28px", sm: "40px", md: "40px", lg: "45px" },
                  width: { xs: "100px", sm: "180px", md: "190px", lg: "250px" },
                  borderRadius: "6px",
                  fontSize: { xs: "10px", sm: "13px", md: "13px", lg: "20px" },
                }}
              >
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
