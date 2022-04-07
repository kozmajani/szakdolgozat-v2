import React from "react";
import logo from "../images/logo.png";
import me_logo from "../images/me_logo.png";

const Home = () => {
  return (
    <>
      <div class="header">
        <h1>FFmpeg Video Converter</h1>
      </div>
      <div>
        <div class="row">
          <div class="side">
            <div>
              <h2>Author</h2>
              <p>Kozma János</p>
              <img className="sideimg" src={logo} alt="Logo"></img>
            </div>
            <div>
              <h2>Miskolci Egyetem</h2>
              <p>2022</p>
              <div>
                <img className="sideimg" src={me_logo} alt="ME_Logo"></img>
              </div>
            </div>
          </div>
          <div class="main">
            <div>
              <h2>SIMPLE VIDEO CONVERTING</h2>
              <p>..for simple people</p>
            </div>
            <div>
              <h2>Convert your videos easily and freely</h2>
              <h5>Since 2021..</h5>
              <div class="fakeimg">Image</div>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
