import React from "react";
import Header from "./components/Header";
import TourInfo from "./components/TourInfo";
import Experiences from "./components/Experiences";
import HomeTrails from "./components/HomeTrails";
import Footer from "components/Footer";
import NavBarCommon from "components/NavBarCommon";

const Home = () => {
  return (
    <React.Fragment>
      <NavBarCommon />
      <Header />
      <HomeTrails />
      <TourInfo />
      <Experiences />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
