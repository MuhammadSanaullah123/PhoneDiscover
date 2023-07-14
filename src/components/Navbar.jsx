import React from "react";

//mui
import Button from "@mui/material/Button";
import logo from "../assets/TT Logo.png";

const Navbar = () => {
  return (
    <div id="navbar">
      <img src={logo} alt="" />
      <Button
        style={{
          display: `${window.location.pathname === "/login" && "none"}`,
        }}
        variant="contained"
      >
        Log out
      </Button>
    </div>
  );
};

export default Navbar;
