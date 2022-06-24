import React from "react";
import "../App.css";

function AboutMe() {
  return (
    <section>
      <div className="about-me" id="about">
        <div className="left-about">
          <img src="./img/head.webp" />
        </div>
        <div className="right-about">
          <h1>
            About <strong>Me</strong>
          </h1>
          <h3>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </h3>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>

          <a className="green-btn">Hire Me</a>
          <a className="gray-btn">Download CV</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
