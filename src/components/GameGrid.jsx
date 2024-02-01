import React from "react";
import img1 from "../assets/cover.png";

const GameGrid = ({ itr }) => {
  return (
    <>
      <div className="">
        <img  className = "border-4 border-white w-25 h-25 m-2" src={itr.src} alt="not found" />
      </div>
      <div className="">
        <img src={img1} alt="" className="border-4 boder-white w-25 h-25 m-2"/>
      </div>
    </>
  );
};

export default GameGrid;
