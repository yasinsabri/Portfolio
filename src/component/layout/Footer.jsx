import React from "react";
import ColoredLine from "../utils/ColoredLine";
import {
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid pb-5 pt-5">
        <div className="row">
          <div className="col-sm-5 pt-2">
            <ColoredLine color="#ffc86b" height="15px" width="540px" />
          </div>
          <div className="col-sm-2 contact text-center ">
            <h2>Contact Me</h2>
          </div>
          <div className="col-sm-5 pt-2">
            <ColoredLine color="#ffc86b" height="15px" width="540px" />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="d-flex justify-content-center gap-5 flex-wrap  ">
              <div className="d-flex gap-3 hero-icons ">
                <a
                  href="https://www.linkedin.com/in/yasin-sabri/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope />
                </a>
                <p className="pt-1">YasinSabri869@gmail.com</p>
              </div>
              <div className="d-flex gap-3  hero-icons">
                <a
                  href="https://www.linkedin.com/in/yasin-sabri/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPhoneAlt />
                </a>
                <p className="pt-1">+92 316 5854757</p>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center hero-icons gap-3 pt-3 ">
                <a
                  href="https://www.linkedin.com/in/yasin-sabri/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMapMarkerAlt/>
                </a>
                <p className="pt-1">Islamabad Pakistan</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
        <div className="row pt-5">
          <div className="col-sm-5 pt-2">
            <ColoredLine color="#ffc86b" height="15px" width="540px" />
          </div>
          <div className="col-sm-2 contact text-center ">
            <div className=" hero-icons justify-content-center m-1 d-flex gap-4 ">
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
          <div className="col-sm-5 pt-2">
            <ColoredLine color="#ffc86b" height="15px" width="540px" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
