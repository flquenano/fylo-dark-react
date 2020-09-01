import React from "react";
import PropTypes from "prop-types";

function FeaturesItem({ img, title, text }) {
  return (
    <div className="features__item">
      <img className="features__item-icon" src={img} alt="Feature Icon" />
      <h1 className="features__item-heading">{title}</h1>
      <p className="features__item-text">{text}</p>
    </div>
  );
}

FeaturesItem.propTypes = {
  img: PropTypes.elementType,
  title: PropTypes.string,
  text: PropTypes.string
};

export default FeaturesItem;
