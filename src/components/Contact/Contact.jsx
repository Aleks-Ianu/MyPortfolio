import React from 'react';
import Form from '../Form/Form';
import Hero from '../Hero/Hero';
import Container from '../Container/Container';

function Contact() {
    return (
        <div>
    <Hero backgroundImage="https://www.imengineeringwest.com/content/dam/Informa/amg/ime-west/2024/images/IMEW24-contact-us-hero.png">
      <h1>Hi There</h1>
      <br />
      <h2>fill in this form to reach out to me</h2>
    </Hero>
    <Container style={{ marginTop: 30}}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h2>Contact Form</h2>
          </div>
        </div>
        <Form />
      </Container>
      </div>
    )
}

export default Contact;