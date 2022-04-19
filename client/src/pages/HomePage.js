import React from "react";
import converting from "../images/converting.jpg";
import reactlogo from "../images/reactlogo.png";

import "./css/homepage.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-div">
      <div>
        <h2>SIMPLE VIDEO CONVERTING</h2>
        <p>..for simple people</p>
        <img
          className="converting-img"
          src={converting}
          alt="converting"
          width={"80%"}
        ></img>
      </div>
      <div className="about-div">
        <h1>
          About <i>abscura.</i>
        </h1>
        <div>
          Abscura was first developed in 2021 as a diploma thesis.
          <div className="block">
            <div className="page-logo">
              <a
                href="https://en.reactjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={reactlogo} width="50px" alt="react"></img>
              </a>
            </div>
            <div style={{ padding: "1em" }}>
              The project was bootstrapped and developed with ReactJS.
            </div>
          </div>
          <div>
            The main functionaility of this page depends on{" "}
            <a href="https://ffmpeg.org/">FFmpeg</a>, which lets you convert
            your videos, without using our servers.
          </div>
          <div>
            To use the application, you must <i>log in</i> or <i>register</i> a
            user.
          </div>
          <div>
            Which you can do
            <Link className="tologin-button" to={"/login"}>
              <Button>HERE!</Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Link className="feedback-button" to={"/support"}>
          <Button>Send us your feedback!</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
