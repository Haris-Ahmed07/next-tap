import React from "react";
import { Modal, Button, Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import axios from "axios";

const ShareModal = ({ open, handleClose, toPDF }) => {
  const handleShare = async (platform) => {
    try {
      const pdfBlob = await toPDF();
      if (!(pdfBlob instanceof Blob)) {
        throw new Error("The provided file is not a Blob.");
      }

      const formData = new FormData();
      formData.append("file", pdfBlob, "document.pdf");

      const response = await axios.post("https://file.io", formData);
      const pdfUrl = response.data.link;

      const shareUrls = {
        Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          pdfUrl
        )}`,
        WhatsApp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
          pdfUrl
        )}`,
        LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          pdfUrl
        )}`,
      };

      window.open(shareUrls[platform], "_blank");
    } catch (error) {
      console.error("Error generating or uploading PDF:", error);
    }
  };

  return (
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            marginTop: "20%",
            backgroundColor: "darkBlue",
            borderRadius: "xl",
            gap: 2,
            padding: 4,
            width: {
              xs: "90%",
              sm: "50%",
              md: "40%",
              
            },
            color: "white",
            borderRadius: "10px"
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontFamily: "Montserrat",
            }}
          >
            Share Your Card
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              gap: 2,
            }}
          >
            <Button
              onClick={() => handleShare("Facebook")}
              sx={{ mb: 2, color: "white" }}
            >
              <FacebookIcon sx={{ fontSize: "5rem" }} />
            </Button>
            <Button
              onClick={() => handleShare("LinkedIn")}
              sx={{ mb: 2, color: "white" }}
            >
              <LinkedInIcon sx={{ fontSize: "5rem" }} />
            </Button>
            <Button
              onClick={() => handleShare("WhatsApp")}
              sx={{ mb: 2, color: "white" }}
            >
              <WhatsAppIcon sx={{ fontSize: "5rem" }} />
            </Button>
          </Box>
        </Box>
      </Modal>
  );
};

export default ShareModal;
