// src/components/Skills.js
import React from "react";
import "./Skills.css";
import node from "./icons/node.png";
import flutter from "./icons/flutter.png";
import kotlin from "./icons/kotlin.png";
import mongo from "./icons/mongo.png";
import react from "./icons/react.png";
import three from "./icons/three.png";
import one from "./icons/figma.png";
import two from "./icons/blender.png";
import cloud from "./icons/cloud.png";
import four from "./icons/ai.png";
import five from "./icons/unreal.png";
import six from "./icons/kubernetes.png";
import seven from "./icons/next.png";
import eight from "./icons/docker.png";
import nine from "./icons/aws.png";

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="first_row">
        <div className="icons">
          <div className="flutter_div">
            <div className="flutter">
              <img src={flutter} className="flutter_icon_logo" />
            </div>
            <span>Flutter</span>
          </div>
          <div className="node_div">
            <div className="node">
              <img src={node} className="node_icon_logo" />
            </div>
            <span className="node_span">node</span>
          </div>
          <div className="kotlin_div">
            <div className="kotlin">
              <img src={kotlin} className="kotlin_icon_logo" />
            </div>
            <span>kotlin</span>
          </div>
          <div className="react_div">
            <div className="react">
              <img src={react} className="react_icon_logo" />
            </div>
            <span>react</span>
          </div>
          <div className="three_div">
            <div className="three">
              <img src={three} className="three_icon_logo" />
            </div>
            <span>three</span>
          </div>
          <div className="mongo_div">
            <div className="mongo">
              <img src={mongo} className="mongo_icon_logo" />
            </div>
            <span>mongo</span>
          </div>
        </div>
      </div>
      <div className="second_row">
        <div className="scroll-container">
          <div className="one_div">
            <div className="one_container">
              <img src={one} className="one_icon_logo" />
            </div>
          </div>
          <div className="one_div">
            <div className="two">
              <img src={two} className="two_icon_logo" />
            </div>
          </div>
          <div className="one_div">
            <div className="three">
              <img src={cloud} className="cloud_icon_logo" />
            </div>
          </div>

          <div className="four">
            <img src={four} className="four_icon_logo" />
          </div>
          <div className="five">
            <img src={five} className="five_icon_logo" />
          </div>
          <div className="six">
            <img src={six} className="six_icon_logo" />
          </div>
          <div className="seven">
            <img src={seven} className="seven_icon_logo" />
          </div>
          <div className="eight">
            <img src={eight} className="eight_icon_logo" />
          </div>
          <div className="nine">
            <img src={nine} className="nine_icon_logo" />
          </div>
          <div className="one">
            <img src={one} className="one_icon_logo" />
          </div>
          <div className="two">
            <img src={two} className="two_icon_logo" />
          </div>
          <div className="three">
            <img src={cloud} className="cloud_icon_logo" />
          </div>
          <div className="four">
            <img src={four} className="four_icon_logo" />
          </div>
          <div className="five">
            <img src={five} className="five_icon_logo" />
          </div>
          <div className="six">
            <img src={six} className="six_icon_logo" />
          </div>
          <div className="seven">
            <img src={seven} className="seven_icon_logo" />
          </div>
          <div className="eight">
            <img src={eight} className="eight_icon_logo" />
          </div>
          <div className="nine">
            <img src={nine} className="nine_icon_logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
