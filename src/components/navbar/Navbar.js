import React from "react";
import "./navbar.css";
import { BsSearch, BsChat, BsBell } from "react-icons/bs";
import TextField from "@material-ui/core/TextField";
import { MdOutlineHeadsetMic } from "react-icons/md";
function Navbar({ title }) {
  return (
    <div className="Upcoming-artist">
      <div className="row justify-content-between ">
        <h1 className=" title col-4 mb-0">{title}</h1>
        <div className="search col-3 text-center">
          <div className="row align-items-center">
            <span className="search-icon col-4">
              <BsSearch />
            </span>

            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              className="col-6 text"
              sx={{ marginTop: "300px" }}
            />
          </div>
        </div>
        <div className="icons-group col-4 text-right">
          <div className="row justify-content-end">
            <span className=" col-2 px-1">
              <BsChat />
            </span>
            <span className="col-2 px-1">
              <BsBell />
            </span>

            <span className="col-2 px-1">
              <MdOutlineHeadsetMic />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
