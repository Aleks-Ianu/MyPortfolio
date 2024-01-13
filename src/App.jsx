import { React, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/ContactMe" element={<Contact />} />
          </Routes>
        </Wrapper>

        <Footer />
      </div>
    </Router>
  );
}

//  Avatar Url
// https://a0.anyrgb.com/pngimg/422/1054/half-body-model-blond-male-models-to-work-in-an-office-man-delayering-cartoon-man-man-avatar-angry-man-snow-man-thumbnail.png
export default App;
