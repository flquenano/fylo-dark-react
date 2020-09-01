import React from "react";
import "./_productive.scss";

import Illustration from "assets/images/illustration-stay-productive.png";
import Arrow from "assets/images/icon-arrow.svg";

const Productive = () => (
  <div className="productive">
    <img
      src={Illustration}
      alt="Stay Productive Illustration"
      className="productive__img"
    />
    <div className="productive__content">
      <h1 className="productive__heading">Stay productive, wherever you are</h1>
      <p className="productive__text">
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>
      <p className="productive__text">
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </p>
      <a href="#" className="productive__link">
        See how Fylo works{" "}
        <img src={Arrow} alt="Arrow Icon" className="svg icon-arrow" />
      </a>
    </div>
  </div>
);

export default Productive;
