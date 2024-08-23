import React, { useState } from "react";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
const TableWithSearch = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  

  const filteredData = props.data.filter(
    (item) =>
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.os.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="md:mx-[4rem]">
      {/* Search Bar */}
      <div className="flex items-center justify-center xs:mb-5  sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 xxl:mb-10">
        <div
          style={{
            marginBottom: "10px",
            padding: "5px",
            width: "100%",
            maxWidth: "80%",
            borderRadius: "15px",
            border: "1px solid transparent",
            backgroundImage:
              "linear-gradient(#E1E1E1, #E1E1E1), linear-gradient(91.41deg, #0069C0 15.09%, #F1F1F1 59.01%)",
            backgroundOrigin: "border-box",
            backgroundClip: "content-box, border-box",
            
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: {
                height: "60px",
                fontSize: "16px",
                borderRadius: "15px",
                padding: "0 15px",
                backgroundColor: "#E0E0E0",
                color: "#333",
              },
            }}
            sx={{
              width: "100%",
              maxWidth: "100%",
              backgroundColor: "#E1E1E1",
              borderRadius: "15px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
            }}
          />
        </div>
      </div>

      {/* Table */}
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                paddingBlock: "18px",paddingInline: "15px",
                textAlign: "start",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: "19.6px",
                  textAlign: "left",
                  color: "#383838",
                }}
              >
                Brand
              </Typography>
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                paddingBlock: "18px",paddingInline: "15px",
                textAlign: "start",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: "19.6px",
                  textAlign: "left",
                  color: "#383838",
                }}
              >
                Model
              </Typography>
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                 paddingBlock: "18px",paddingInline: "15px",
                textAlign: "start",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: "19.6px",
                  textAlign: "left",
                  color: "#383838",
                }}
              >
                OS
              </Typography>
            </th>
          </tr>
        
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", paddingBlock: "10px",paddingInline: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "19.6px",
                    textAlign: "left",
                  }}
                >
                  {item.brand}
                </Typography>
              </td>
              <td style={{ border: "1px solid #ddd",  paddingBlock: "10px",paddingInline: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "19.6px",
                    textAlign: "left",
                  }}
                >
                  {item.model}
                </Typography>
              </td>
              <td style={{ border: "1px solid #ddd",  paddingBlock: "10px",paddingInline: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "19.6px",
                    textAlign: "left",
                  }}
                >
                  {item.os}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithSearch;
