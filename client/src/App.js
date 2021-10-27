import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Author from "./pages/AuthorPage";
import Mailer from "../src/components/Mailer/Mailer";
import Login from "./components/Authorization/Login/Login";
import Register from "./components/Authorization/Register/Register";
import Converter from "./pages/ConverterPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };
  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Sidebar loggedIn={loggedIn} logout={logout} />
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
    </Router>
  );
}

export default App;
