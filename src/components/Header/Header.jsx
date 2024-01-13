import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";

function Header(props) {
  return (
    <div>
      <Navbar />
      {/* <Hero backgroundImage="https://www.freecodecamp.org/news/content/images/size/w1000/2022/05/ilya-pavlov-OqtafYT5kTw-unsplash.jpg">
      <h1>Welcome, My name is Aleks.</h1>
      <h2>A front end Web Developer</h2>
      <img alt="Portfolio's Avatar"  src="https://a0.anyrgb.com/pngimg/422/1054/half-body-model-blond-male-models-to-work-in-an-office-man-delayering-cartoon-man-man-avatar-angry-man-snow-man-thumbnail.png" className="avatarImg" />
    </Hero> */}
    </div>
  );
}

export default Header;
