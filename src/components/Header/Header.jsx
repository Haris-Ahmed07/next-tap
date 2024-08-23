import React, { useState } from "react";
import Logo from "/assets/logo.png"
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../../data.js";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";
import DropDown from "./DropDown";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const cart = useSelector((state) => state.cart);
  const noOfCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header
      className={`bg-light fixed left-0 w-full z-20  transition-all duration-200`}
    >
      <div className="container mx-auto py-1">
        <div className="flex justify-between items-center">
          <Link to="/home">
            <img className="h-[75px] w-[100px]" src={Logo} alt=""></img>
          </Link>

          {/* Mobile Cart & Menu icon */}
          <div className="flex justify-between items-center text-2xl text-dark md:hidden lg:text-3xl cursor-pointer gap-x-7">
            <div className="relative">
              <Link to="/cart">
                <ImCart />
                {noOfCartItems > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full px-1 text-xs font-bold">
                    {noOfCartItems}
                  </span>
                )}
              </Link>
            </div>
            <div onClick={() => setMobileNav(!mobileNav)} className="z-50">
              {mobileNav ? <CgClose /> : <CgMenuRight />}
            </div>
          </div>

          {/* Computer NavBar */}
          <nav className="hidden md:flex ">
            <ul className="md:flex md:gap-x-5 sm:gap-x-2 lg:gap-x-12 xl:gap-x-12 xxl:gap-x-12">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={`/${item.href}`}>
                      <span
                        className="capitalize font-primary font-medium xxl:text-[17px] xl:text-[17px]
                      lg:text-[15px] md:text-[13px] text-dark hover:border-b transition-all"
                      >
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
              <li className="relative pt-0.5 text-[20px]">
                <Link to="/cart">
                  <ImCart />
                </Link>
                {noOfCartItems > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full px-1 text-xs font-bold">
                    {noOfCartItems}
                  </span>
                )}
              </li>
            </ul>
          </nav>

          {/* Mobile Navbar */}
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 min-w-full w-full max-w-xs h-fit transition-all top-[5.4rem] bg-light rounded-b-2xl shadow-lg border`}
          >
            <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              {navigation.map((item, index) => (
                <li onClick={() => setMobileNav(!mobileNav)}>
                  <Link
                    to={`/${item.href}`}
                    class="xs::bg-transparent block pl-4 pr-4 md:p-0 rounded text-left text-lg text-gray-800 py-4"
                    aria-current="page"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
