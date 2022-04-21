import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import "./Login.css";

export default function Login({ authorization }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const sendLogin = (e) => {
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
        authorization();
        history.push("/");
      } else if (res.status === 401) {
        setError("Incorrect username or password!");
      } else {
        throw res.error;
      }
    });
  };

  return (
    <div className="login-container">
      <div className="title">
        <h1>Login</h1>
      </div>
      {error !== "" ? <Alert severity="error">{error}</Alert> : null}
      <FormControl className="username-container">
        <InputLabel htmlFor="name" required>
          Username
        </InputLabel>
        <Input id="name" onChange={(e) => setName(e.target.value)} />
      </FormControl>

      <FormControl className="password-container">
        <InputLabel htmlFor="password" required>
          Password
        </InputLabel>
        <Input
          id="email"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Link className="login-button">
        <Button onClick={sendLogin}>Sign In</Button>
      </Link>
      <div style={{ padding: "1rem" }}>
        <p>
          Not a member yet?
          <Link className="register-button" to={"/register"}>
            <Button>Sign Up</Button>
          </Link>
        </p>
      </div>
      <div>
        <p>
          Got a question?
          <Link className="register-button" to={"/support"}>
            <Button>Contact us</Button>
          </Link>
        </p>
      </div>
    </div>
  );
}
