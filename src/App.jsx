import {  React, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';


function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <Header>
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/discover" element={<Discover/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>
        </Header> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

//  Avatar Url
// https://a0.anyrgb.com/pngimg/422/1054/half-body-model-blond-male-models-to-work-in-an-office-man-delayering-cartoon-man-man-avatar-angry-man-snow-man-thumbnail.png
export default App;
