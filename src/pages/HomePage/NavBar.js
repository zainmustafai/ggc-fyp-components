import React from "react";
import ggcLogo from "../../images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "./NavBar.scss";
import OutlineButton from "../../components/OutlineButton/OutlineButton";

// HomePage Component
const NavBar = () => {
  return (
    <div
      className={`navbar w-full p-2 bg-[#e72429] shadow-lg flex items-center justify-between md:px-[12%]`}
    >
      <div className="flex items-center gap-3 ml-8">
        <div className="h-[50px] w-[50px] bg-white overflow-hidden rounded-full">
          <img src={ggcLogo} alt="Logo" className="w-full" />
        </div>
        <h1 className="font-bold text-[#fff] text-xl">GGC-LMS</h1>
      </div>
      {/* LINKS  */}
      <ul className="hidden lg:flex gap-14 text-xs text-[#fff] mr-6 items-center ">
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <OutlineButton text="SUPER ADMIN"/>
      </ul>
      <div className="toggle-btn text-2xl text-[#fff] mr-4 lg:hidden">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default NavBar;
