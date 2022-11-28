import React from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <NavBar />
      <div className="px-2 sm:px-[2%] md:px-[8%] lg:px-[10%] xl:px-[12%]">
        <Jumbotron />
      </div>
    </div>
  );
};

export default HomePage;
