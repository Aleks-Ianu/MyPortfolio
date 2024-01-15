import React from "react";
import Form from "../Form/Form";
import Hero from "../Hero/Hero";
import Container from "../Container/Container";
import "./style.css"

// https://www.imengineeringwest.com/content/dam/Informa/amg/ime-west/2024/images/IMEW24-contact-us-hero.png
// https://eytbcurapcs.exactdn.com/wp-content/uploads/2020/07/Contact-hero-image.png?strip=all&lossy=1&ssl=1
function Contact() {
  return (
    <div className="containerContact"  style={{ backgroundImage: `url(https://www.revolutionlacrossecamps.com/wp-content/uploads/2013/12/contactform-background-3.jpg)` }}>
      <Hero>
        <h1>Still Here?</h1>
        <br />
        <h2>Fill in this form to reach out to me</h2>
      </Hero>
      <div className="formArea">
      <Container style={{ marginTop: 30 }}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            {/* <h2>Contact Form</h2> */}
          </div>
        </div>
        <Form />
      </Container>
      </div>
    </div>
  );
}

export default Contact;
