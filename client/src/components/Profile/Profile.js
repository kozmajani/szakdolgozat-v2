import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Profile = ({ logout }) => {
  return (
    <div>
      <div>Egy kep</div>
      <div>Egy gomb</div>
      <Link to="/">
        <Button onClick={logout}>Masik gomb</Button>
      </Link>
    </div>
  );
};
export default Profile;
