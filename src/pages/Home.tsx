import React from "react";
import Helmet from "react-helmet";
import HomeContainer from "../containers/HomeContainer";

const Home: React.SFC = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeContainer />
    </>
  );
};

export default Home;
