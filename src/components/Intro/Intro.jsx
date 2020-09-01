import React from "react";
import "./_intro.scss";

import Illustration from "assets/images/illustration-intro.png";

const Intro = () => (
  <div className="intro">
    <div className="intro__display">
      <img
        src={Illustration}
        alt="Intro Illustration"
        className="intro__display-img"
      />
    </div>

    <div className="intro__content">
      <h1 className="intro__content-heading heading">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="intro__content-text">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
    </div>
    <button className="intro__content-btn btn">Get Started</button>
  </div>
);

export default Intro;
