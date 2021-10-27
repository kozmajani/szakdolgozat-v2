import React from "react";
import logo from "../images/logo.png";

const Author = () => {
  return (
    <div className="content">
      <div align="center">
        <div style={{ padding: "2rem" }}>
          <img src={logo} alt="Logo" height="450px" width="450px"></img>
          <h1>Kozma János</h1>
          <div>
            <h2>SVOXGH</h2>
          </div>
        </div>
        <div>
          <b>Programtervező informatikus BSc</b>
        </div>
        <div>Miskolci Egyetem</div>
        <div>kozmajani14@gmail.com</div>
        <div style={{ padding: "1rem" }}>Github repository</div>
      </div>
    </div>
  );
};

export default Author;
