import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMusicalNotesOutline, IoSettingsOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";

import "./menu.css";
function Menu() {
  return (
    <div className="app_menu">
      <p className="menu">menu</p>
      <ul className="menu_list">
        <li className="row   align-items-center">
          <span className="col-md-2 icon pr-0">
            <AiOutlineAppstore />
          </span>
          <Link to="/" className=" px col-md-8  mt-2">
            artist feed
          </Link>
        </li>
        <li className="row  align-items-center">
          <span className="col-md-2 icon pr-0">
            <AiOutlineAppstore />
          </span>
          <Link to="/mymusic" className=" px col-md-8 mt-2">
            my music
          </Link>
        </li>
        <li className="row  align-items-center">
          <span className="col-md-2 icon pr-0">
            <IoMusicalNotesOutline />
          </span>
          <Link to="/activeVotings" className=" px col-md-8 mt-3">
            my active votings
          </Link>
        </li>
        <li className="row  align-items-center">
          <span className="col-md-2 icon pr-0">
            <BsPeople />
          </span>
          <Link to=" /internationalArtist" className=" px col-md-8 mt-3">
            internationcal artists
          </Link>
        </li>
        <li className="row  align-items-center">
          <span className="col-md-2 icon pr-0">
            <IoSettingsOutline />
          </span>
          <Link to="/settings" className=" px-2 col-md-8 mt-2">
            setting
          </Link>
        </li>
      </ul>
      <div className="profiles">
        <p className="profile">profile</p>
        <div className="profile-info row align-items-center">
          <div className="img col-lg-2"></div>
          <div className="info my-5 col-lg-10">
            <p className="name">shayan</p>
            <p className="email  mb-0">shayanakhtar14@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
