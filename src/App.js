// src/App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import ProfilePhoto from "./components/ProfilePhoto";
import ButtonsSection from "./components/ButtonsSection";
import SocialLinks from "./components/SocialLinks";
import Description from "./components/Description";
import Tabs from "./components/Tabs";
import "./background.png"
import { useMouseMove, useValue, animate} from "react-ui-animate";

// const CURSOR_SIZE = 20;

function App() {
  // const x = useValue(0);
  // const y = useValue(0);
  // const smoothX = useValue(0); // Smoothened X value
  // const smoothY = useValue(0); // Smoothened Y value

  // useMouseMove(({ mouseX, mouseY }) => {
  //   x.value = mouseX - (936) - CURSOR_SIZE / 1;
  //   y.value = mouseY - (427) - CURSOR_SIZE / 1;
  // });

  // useMouseMove(({ mouseX, mouseY }) => {
  //    x.value = mouseX  - CURSOR_SIZE / 1;
  //    y.value = mouseY - CURSOR_SIZE / 1;
  //     });

  return (
  
    <div className="App">

      <div className="bg-image"></div>
      <div className="WholeContent">
        {/* First Row */}
        <div className="row">
          <div className="column">
            <Header />
          </div>
          <div className="column">
            <Skills />
          </div>
          <div className="column">
            <ProfilePhoto />
          </div>
        </div>

        {/* Second Row */}
        <div className="row">
          <div className="buttons-section-row">
            <ButtonsSection />
          </div>
          <div className="social-links-row">
            <SocialLinks />
          </div>
          <div className="column">
            <Description />
          </div>
        </div>

        {/* Third Row */}
        <div className="bottom">
          <div className="column">
            <Tabs />
          </div>
        </div>
      </div>

       {/* Cursor animation
       <animate.div
        style={{
          position: "absolute", // Fix cursor's position relative to the page
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          backgroundColor: "grey",
          borderRadius: "50%",
          translateX: x.value,
          translateY: y.value,
          pointerEvents: "none", // Makes sure the cursor doesn't block other elements
          zIndex: 1, // Ensures the cursor stays on top
        }}
      /> */}
    </div>

    
  );
}

export default App;
