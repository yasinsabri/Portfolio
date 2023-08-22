import React from "react";
import ColoredLine from "../utils/ColoredLine";

const About = () => {
  return (
    <React.Fragment>
      <div className="container pb-5">
        <div className="row">
          <div className="col-sm-12 pt-5">
            <div className="about-head">
              <h1>About</h1>
            </div>
            <div className="about-desc d-flex gap-2 ">
              <ColoredLine color="#ffc86b" height="15px" width="400px" />
              <p>
                I'm a passionate software engineer with a love for
                problem-solving and innovation. My journey in the world of
                programming began with curiosity, and it has since evolved into
                a rewarding career. With a strong foundation in computer science
                and a knack for turning ideas into functional solutions, I
                thrive in dynamic environments where collaboration and learning
                are valued. Whether it's crafting elegant code or diving into
                complex challenges, I'm committed to delivering high-quality
                software that makes a positive impact. Let's bring ideas to life
                through technology!
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
