import React, { useState, useEffect } from "react";
import Logo from "/assets/img/logo-png.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../../data.js";
import NavMobile from "../NavMobile/NavMobile.jsx";
import { Link } from "react-router-dom";

const HeaderDark = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        bg ? "bg-primary " : "bg-primary"
      } fixed left-0 w-full xl:py-3 lg:py-3 md:py-3 sm:py-3 xs:py-3 z-10 transition-all duration-200 xs:mt-10 sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/home">
            <img className="h-[70px] w-[100px]" src={Logo} alt=""></img>
          </Link>
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          <nav className="hidden md:flex ">
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="capitalize text-xl text-white hover:border-b transition-all"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed botton-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDark;