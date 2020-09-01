import React from "react";
import PropTypes from "prop-types";

function TestimonyItem({ text, profile, name, position }) {
  return (
    <div className="testimonies__item">
      <p className="testimonies__item-text">{text}</p>
      <div className="testimonies__item-user">
        <img
          src={profile}
          alt="Profile Image"
          className="testimonies__item-user-img"
        />
        <div className="testimonies__item-user-det">
          <p className="testimonies__item-user-det-name">{name}</p>
          <p className="testimonies__item-user-det-pos">{position}</p>
        </div>
      </div>
    </div>
  );
}

TestimonyItem.propTypes = {
  text: PropTypes.string,
  profile: PropTypes.elementType,
  name: PropTypes.string,
  position: PropTypes.string
};

export default TestimonyItem;
