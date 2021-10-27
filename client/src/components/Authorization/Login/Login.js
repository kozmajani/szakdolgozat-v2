import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import "./Login.css";

const Login = ({ login }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  let sendLogin = (e) => {
    e.preventDefault();
    const loginUser = { name, password };
    fetch("http://localhost:9000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser),
    }).then((res) => {
      if (res.status === 200) {
        login();
        history.push("/");
      } else if (res.status === 401) {
        setError("Incorrect username or password!");
      } else {
        throw res.error;
      }
    });
  };

  return (
    <div className="container">
      {error !== "" ? <Alert severity="error">{error}</Alert> : null}
      <div className="title">
        <h1>Login</h1>
      </div>
      <FormControl className="email-container">
        <InputLabel htmlFor="name">Username</InputLabel>
        <Input
          id="name"
          onChange={(e) => setName(e.target.value)}
          aria-describedby="my-helper-text"
        />
      </FormControl>

      <FormControl className="password-container">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="email"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          aria-describedby="my-helper-text"
        />
      </FormControl>

      <Link className="login-button">
        <Button onClick={sendLogin}>Sign In</Button>
      </Link>
      <div style={{ padding: "3rem 3rem", marginTop: "4rem" }}>
        <p>Not a member yet? Sign up!</p>
        <div style={{ paddingTop: "1.2rem" }}>
          <Link
            style={{ margin: "3rem" }}
            className="register-button"
            to={{
              pathname: "/register",
            }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
