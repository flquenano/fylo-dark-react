import React from "react";
import "./_testimonies.scss";

import Testimony from "./TestimonyItem.jsx";

import Satish from "assets/images/profile-1.jpg";
import Bruce from "assets/images/profile-2.jpg";
import Iva from "assets/images/profile-3.jpg";

const Testimonies = () => {
  const testimonies = [
    {
      text:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      profile: Satish,
      name: "Satish Patel",
      position: "Founder & CEO, Huddle"
    },
    {
      text:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      profile: Bruce,
      name: "Bruce McKenzie",
      position: "Founder & CEO, Huddle"
    },
    {
      text:
        "  Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      profile: Iva,
      name: "Iva Boyd",
      position: "Founder & CEO, Huddle"
    }
  ];

  return (
    <div class="testimonies">
      {testimonies.map((testimony) => (
        <Testimony
          text={testimony.text}
          profile={testimony.profile}
          name={testimony.name}
          position={testimony.position}
        />
      ))}
    </div>
  );
};

export default Testimonies;
