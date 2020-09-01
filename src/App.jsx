import React from "react";

import Navbar from "components/Navbar/Navbar.jsx";
import Intro from "components/Intro/Intro.jsx";
import Features from "components/Features/Features.jsx";
import Productive from "components/Productive/Productive.jsx";
import Testimonies from "components/Testimonies/Testimonies.jsx";
import EarlyAccess from "components/EarlyAccess/EarlyAccess.jsx";
import Footer from "components/Footer/Footer.jsx";

import "./App.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Features />
      <Productive />
      <Testimonies />
      <EarlyAccess />
      <Footer />
    </>
  );
};

export default App;
