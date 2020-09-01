import React from "react";
import "./_features.scss";

import Access from "assets/images/icon-access-anywhere.svg";
import Security from "assets/images/icon-security.svg";
import Collaboration from "assets/images/icon-collaboration.svg";
import Store from "assets/images/icon-any-file.svg";

import Feature from "./FeaturesItem.jsx";
import FeaturesItem from "./FeaturesItem.jsx";

const Features = () => {
  const features = [
    {
      img: Access,
      title: "  Access your files, anywhere",
      text:
        " The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
    },
    {
      img: Security,
      title: "Security you can trust",
      text:
        " 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
    },
    {
      img: Collaboration,
      title: "Real-time Collaboration",
      text:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
    },
    {
      img: Store,
      title: "Store any type of file",
      text:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    }
  ];

  return (
    <div className="features">
      {features.map((feature) => (
        <Feature
          key={feature.title.replace(" ", "")}
          img={feature.img}
          title={feature.title}
          text={feature.text}
        />
      ))}
    </div>
  );
};

export default Features;
