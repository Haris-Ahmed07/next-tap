import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import { Button } from "@mui/material";
import Whatsapp from '/assets/wa.png'
const ContactButton = () => {
  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/923403568231";
  };


  return (
    <div className="fixed bottom-2 right-4 gap-x-1 z-50 flex">
            <Button className="bg-gray-200"
        sx={{ 
          padding: {
            xl: "7px",
            lg: "8px",
            sm: "6px",
            xs: "5px",
          },
          color: "black",
          fontSize: {
            xl: "11px",
            lg: "11px",
            md: "11px",
            sm: "11px",
            xs: "11px"
          },
          fontWeight:"1000",
          marginBlockStart:"20px",
          borderRadius: "10px",
         width: "180px", 
        height:"33px",
          background:"#EEEE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      
      >
       Need Help? Chat With Us
      </Button>
      <Button
        sx={{
          padding: "0",
          color: "green",
          fontSize: {
            xl: "5rem",
            lg: "5rem",
            md: "4rem",
            sm: "4rem",
            xs: "4rem"
          },
          backgroundColor: "none",
          borderRadius: "50%",
          width:"70px",
          height:"70px",
          
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleWhatsAppClick}
      >
        <img src={Whatsapp} alt="" className="text-inherit" />
      </Button>

    </div>
  );
};

export default ContactButton;
