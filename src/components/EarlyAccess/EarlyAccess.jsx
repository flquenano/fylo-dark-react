import React from "react";
import "./_earlyaccess.scss";

const EarlyAccess = () => {
  return (
    <div className="early-access">
      <h1 className="early-access__heading">Get early access today</h1>
      <p className="early-access__text">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form action="POST" className="early-access__send-email">
        <input
          type="text"
          name="email"
          aria-label="email"
          className="txtbox"
          placeholder="example@email.com"
        />
        <button className="btn">Get Started For Free</button>
      </form>
    </div>
  );
};

export default EarlyAccess;
