import React from "react";
import Hero from "../Hero/Hero";
import Container from "../Container/Container";

function Home(props) {
  return (
    <div>
      <Hero backgroundImage="https://www.freecodecamp.org/news/content/images/size/w1000/2022/05/ilya-pavlov-OqtafYT5kTw-unsplash.jpg">
        <h1>Welcome to my Page, My name is Aleks.</h1>
        <h2>A front end Web Developer</h2>
        <img
          alt="Portfolio's Avatar"
          src="https://a0.anyrgb.com/pngimg/422/1054/half-body-model-blond-male-models-to-work-in-an-office-man-delayering-cartoon-man-man-avatar-angry-man-snow-man-thumbnail.png"
          className="avatarImg"
        />
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h1>About Me</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>
            Experienced warehouse supervisor transitioning to Frontend Development. Proficient in HTML, 
            CSS, JavaScript, and React, with a passion for crafting intuitive user interfaces. Proven track 
            record of project management and collaboration. Eager to apply creativity and problem-solving skills 
            to develop user-friendly web experiences. Committed to continuous learning and delivering high-quality 
            solutions. Seeking opportunity to contribute to a dynamic frontend development team.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
