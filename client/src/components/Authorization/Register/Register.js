import React, { useState } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import "../Login/Login.css";

export default function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const sendRegister = (e) => {
    e.preventDefault();
    const newUser = { name, password };
    fetch("http://localhost:9000/user/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((res) => {
      if (res.status === 200) {
        history.push("/login");
      } else if (res.status === 400) {
        setError("You must fill the fields below!");
      } else {
        throw res.error;
      }
    });
  };

  return (
    <div className="login-container">
      <div className="title">
        <h1>Register</h1>
      </div>
      {error !== "" ? <Alert severity="error">{error}</Alert> : null}
      <FormControl className="username-container">
        <InputLabel htmlFor="name" required>
          Username
        </InputLabel>
        <Input
          id="name"
          onChange={(e) => setName(e.target.value)}
          aria-describedby="my-helper-text"
        />
      </FormControl>

      <FormControl className="password-container">
        <InputLabel htmlFor="password" required>
          Password
        </InputLabel>
        <Input
          required
          id="email"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <Link className="register-button">
        <Button color="grey" onClick={sendRegister}>
          Sign Up
        </Button>
      </Link>
      <div style={{ padding: "3rem 3rem", marginTop: "1rem" }}>
        <p>
          Already a member?
          <Link className="register-button" to={"/login"}>
            <Button>Sign In</Button>
          </Link>
        </p>
      </div>
    </div>
  );
}
