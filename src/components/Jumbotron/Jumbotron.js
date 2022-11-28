import React from "react";
import heroImage from "../../images/hero.svg";

const Jumbotron = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-h-max w-full overflow-hidden gap-2 sm:gap-3 md:gap-5 lg:gap-8 xl:gap-10 p-10 ">
      {/* JUMBOTRON WRAPPER DIV */}
      <div className="left flex flex-col items-start justify-center gap-5 md:ml-10">
        <h1 className="font-black text-[56px] lg:text-[48px] md:text-[40px] sm:text-[32px] xsm:text-[24px] leading-normal text-[#e72429]">
          WELCOME TO <br /> GGC LMS.
        </h1>
        <p className="text-[18px] w-[60%]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="heroButtons grid grid-cols-2 gap-3">
          <button className="col-span-1 w-[150px] h-[50px] bg-yellow-700 rounded-full text-white">
            STUDENT
          </button>
          <button className="col-span-1 w-[150px] h-[50px] bg-yellow-700 rounded-full text-white">
            TEACHER
          </button>
        </div>
      </div>
      <div className="right flex flex-col items-center w-full mr-10">
        <img src={heroImage} alt="banner"/>
      </div>
    </div>
  );
};

export default Jumbotron;
