import React from "react";
import heroImage from "../../images/hero.svg";
import OutlineButton from "../OutlineButton/OutlineButton";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Jumbotron = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-h-max w-full h-[100%] overflow-hidden gap-2 sm:gap-3 md:gap-5 lg:gap-8 xl:gap-10 p-10 ">
      {/* JUMBOTRON WRAPPER DIV */}
      <div className="left flex flex-col items-center md:items-start justify-center gap-5 md:ml-10 text-center md:text-justify ">
        <h1 className="font-bold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] leading-normal text-[#e72429]">
          WELCOME TO <br /> GGC LMS.
        </h1>
        <p className="text-[18px] w-[60%]">
          The incredibly easy, incredibly engaging Q&A platform
          <br/>
          <span className="text-sm text-center ">
            Save time and help students learn using the power of community
          </span>
        </p>
        {/* BUTTONS CONTAINER. */}
        <div className="heroButtons grid grid-cols-1 sm:grid-cols-2 gap-3">
          <PrimaryButton text={"STUDENT"} link="/studentlogin" />
          <OutlineButton text={"TEACHER"} />
        </div>
      </div>
      {/* RIGHT COL. OF GRID THE CONATINS IMAGE */}
      <div className="right flex flex-col items-center justify-center w-full mr-10">
        <img src={heroImage} alt="banner" />
      </div>
    </div>
  );
};

export default Jumbotron;
