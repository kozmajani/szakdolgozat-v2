import React from "react";
import logo from "../images/logo.png";
import "../App.css";

const Author = () => {
  return (
    <div className="main-container">
      <div className="author-container">
        <div>
          <img src={logo} alt="Logo" height="450px" width="450px"></img>
          <div style={{ textAlign: "center" }}>
            <h1>Kozma János</h1>
            <h2>SVOXGH</h2>
          </div>
        </div>
        <div style={{ paddingTop: "40px", fontSize: "1.5rem" }}>
          <b>Programtervező informatikus BSc</b>
        </div>
        <div
          style={{
            paddingTop: "40px",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          <div>Miskolci Egyetem</div>
          <div>kozmajani14@gmail.com</div>
          <div style={{ padding: "20px", fontSize: "1.5rem" }}>
            <a
              style={{ color: "rgba(26, 188, 156)" }}
              className="a"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/kozmajani/szakdolgozat-v2"
            >
              Github repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
