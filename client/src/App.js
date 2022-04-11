import "./App.css";
import React from "react";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Author from "./pages/AuthorPage";
import Mailer from "../src/components/Mailer/Mailer";
import Login from "./components/Authorization/Login/Login";
import Register from "./components/Authorization/Register/Register";
import Converter from "./components/Converter/ConverterPage";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };
  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <Router>
        <Sidebar loggedIn={loggedIn} logout={logout} />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/converter" exact component={Converter} />
          <Route path="/author" exact component={Author} />
          <Route path="/support" exact component={Mailer} />
          <Route path="/login">
            <Login login={login} />
          </Route>
          <Route path="/register" exact component={Register} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
