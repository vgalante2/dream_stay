import React from 'react'
import logo from "../assets/dreamstay-white.png";

function Footer()  {
  return (
    <div className="footer">
   <div className="footer-content">
    <ul>
    <li>Terms of Service</li>
    <li><img src={logo} alt="logo" className="logo"/></li>
    <li>Privacy Policy</li>
    </ul>
   </div>

    </div>
  )
}

export default Footer;