import React, { useState } from "react";
import "../App.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import FooterLinks from "../components/FooterLinks";

function Footer() {
  const [social, setSocial] = useState([
    { link: "http://google.com", img: <FaFacebookF /> },
    { link: "http://google.com", img: <FaTwitter /> },
    { link: "http://google.com", img: <FaInstagram /> },
    { link: "http://google.com", img: <FaLinkedin /> },
    { link: "http://google.com", img: <FaYoutube /> },
  ]);
  return (
    <footer>
      <div>
        <h5>Copyright &copy; 2022 All rights reserved</h5>
      </div>
      <div className="footer-icons">
        <FooterLinks items={social}/>
      </div>
    </footer>
  );
}

export default Footer;
