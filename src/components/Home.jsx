
import React from "react";
import Grilla from "./Gtilla";
import SlideShow from "./SlideShow";
import Text from "./Text";

const Home = () => {
  return (
    <>
      <Text />
      <SlideShow />
      <div className = "container grillacontainer">
        <Grilla />
      </div>
    </>
  );
};

export default Home;
