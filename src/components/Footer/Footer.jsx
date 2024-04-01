import React from "react";
import "./style.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <span>© Copyright {currentYear}</span>
    </footer>
  );
}

export default Footer;
