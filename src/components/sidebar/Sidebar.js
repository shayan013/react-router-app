import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import { TextField } from "@material-ui/core";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Logo />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <Menu />
      </div>
    </div>
  );
}

export default Sidebar;
