import "./App.css";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Author from "./pages/AuthorPage";
import Mailer from "../src/components/Mailer/Mailer";
import Login from "./components/Authorization/Login/Login";
import Register from "./components/Authorization/Register/Register";
import Converter from "./components/Converter/ConverterPage";

export default function App() {
  const [token, setToken] = useState(false);

  const authorization = () => {
    try {
      setToken(true);
      sessionStorage.setItem("logged-in", JSON.stringify(!token));
    } catch (e) {
      alert(e.message);
    }
  };

  const logout = () => {
    try {
      setToken(false);
      sessionStorage.removeItem("logged-in");
    } catch (e) {
      alert(e.message);
    }
  };

  if (token) {
    return (
      <div className="App">
        <Router>
          <Sidebar token={token} logout={logout} />
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/converter" exact component={Converter} />
            <Route path="/author" exact component={Author} />
            <Route path="/support" exact component={Mailer} />
            <Route path="/login">
              <Login authorization={authorization} />
            </Route>
            <Route path="/register" exact component={Register} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Router>
          <Sidebar token={token} logout={logout} />
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/support" exact component={Mailer} />
            <Route path="/login">
              <Login authorization={authorization} />
            </Route>
            <Route path="/register" exact component={Register} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
