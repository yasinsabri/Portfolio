import React from "react";
import ColoredLine from "../utils/ColoredLine";
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
      </div>
    </React.Fragment>
  );
};

export default Footer;
