import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
const ShopCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" border bg-white border-black-800 rounded-xl px-3 py-3 mx-1.5 my-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? "0 0 20px rgba(0, 0, 0, 0.5)" : "none",
        transition: "box-shadow 0.3s ease-in-out",      
      }}
    >
      <div className="h-[20%] w-full">
        <img className="w-full" src={props.image} alt="" />
      </div>
      <div className="flex justify-between  pt-5">
        <p
          style={{
            fontSize: "16px",
            fontFamily: "Montserrat",
            color: "#231E20",
          }}
        >
          {props.title}
        </p>
      
      </div>
      <div className="flex flex-center">
      <Link
            to={`/card-overview/${+props.id}`}
            className="text-[11px] my-2 underline"
            style={{ fontWeight: "semibold", color: "gray" }}
          >
          view more
        </Link>
      </div>
      <div className="flex text-start w-[88px] h-[20px]">
      <p
            className="p-0"
            style={{
              fontSize: "20px",
              fontFamily: "Montserrat",
              color: "#3D3D3D",
              fontWeight: "semibold",
            }}
          >
          {props.price}
        </p>
      </div>

      <div className=" h-[45px] mt-6">
      <Link to={"/card-overview/"+props.id}>
        <button className=" bg-[#0069C0]  w-full h-full border-[#0069C0] rounded-lg text-white">
          <span style={{ fontSize: "15px" }}>BUY</span>
        </button></Link>
      </div>
    </div>
  );
};

export default ShopCard;
