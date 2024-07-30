import React from "react";
import "./Home.scss";
import Slider from "../../components/Slider/Slider";
import Featured from "../../components/Featured/Featured";
import Categories from "../../components/Categories/Categories";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Featured type="featured" />
      <Featured type="trending" />
      <Categories />
    </div>
  );
};

export default Home;
