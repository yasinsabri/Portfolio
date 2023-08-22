import React from "react";
import VerticalColoredLine from "../utils/VerticalColoredLine";
import { FaLinkedin, FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="container pb-5">
        <div className="row">
          <div className="col-sm-6 pt-5 ">
            <div className="name pt-5">
              <h1>
                I'M <span>YASIN SABRI</span>
              </h1>
              <h2 className="pt-3">SOFTWARE ENGINEER & PROJECT MANAGER</h2>
              <div className="pt-5">
                <button>Contact Me</button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 pt-4">
            <div className=" d-flex  ">
              <div>
                <img src="assets/self.jpg" alt="" className="self-img w-100" />
              </div>
              <div className="social-icon">
                <div>
                  <VerticalColoredLine color="#FFC86B" height="100px" />
                </div>
                <div className=" hero-icons d-flex flex-column ">
                  <a
                    href="https://www.linkedin.com/in/yasin-sabri/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://twitter.com/me_yasin_sabri"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yasin-sabri/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yasin-sabri/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
