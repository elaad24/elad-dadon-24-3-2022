import React from "react";
import "../css/navbar.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import SearchBar from "./common/SearchBar";
import SettingsDiv from "./common/SettingsDiv";
import { useSelector, useDispatch } from "react-redux";

export default function NavBar() {
  const inDarkMood = useSelector((state) => state.Settings.darkMode);

  return (
    <div className="navbar ">
      <div className="responsiveHeader">
        <h2 className="">Herolo Task</h2>
        <div className="searchBar">
          <SearchBar />
        </div>
      </div>
      <div className="responsive">
        <div className="d-flex">
          <SettingsDiv />
        </div>
        <div className="d-flex gap-3">
          <Link to="/">
            <button
              className={
                inDarkMood
                  ? "btn btn-outline-warning text-light buttons"
                  : "btn btn-warning text-light buttons"
              }
            >
              Home
            </button>
          </Link>

          <Link to="/favorites">
            <button
              className={
                inDarkMood
                  ? "btn btn-outline-primary text-light buttons"
                  : "btn btn-primary text-light buttons"
              }
            >
              Favorites
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
