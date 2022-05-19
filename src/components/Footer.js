import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <FontAwesomeIcon icon={faFacebook} size="3x" className="footIcon" />
      <FontAwesomeIcon icon={faInstagram} size="3x" className="footIcon" />
    </div>
  );
};

export default Footer;