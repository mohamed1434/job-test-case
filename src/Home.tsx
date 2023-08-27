import React from "react";
import SideBar from "./SideBar";
import "./styles.css";
import Information from "./Information";
const Home = () => {
  return (
    <div className="box">
      <SideBar />
      <Information />
    </div>
  );
};

export default Home;
