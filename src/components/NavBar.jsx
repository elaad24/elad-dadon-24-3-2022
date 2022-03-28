import React from "react";
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
    <div className="d-flex align-items-center justify-content-between mb-3 ">
      <h2 className="">Herolo Weather Task</h2>
      <div className="">
        <SearchBar />
      </div>
      <div className="d-flex">
        <SettingsDiv />
      </div>
      <div className="d-flex gap-4">
        <Link to="/">
          <button
            className={
              inDarkMood
                ? "btn btn-outline-warning text-light fs-5"
                : "btn btn-warning text-light fs-5"
            }
          >
            Home
          </button>
        </Link>

        <Link to="/favorites">
          <button
            className={
              inDarkMood
                ? "btn btn-outline-primary text-light fs-5"
                : "btn btn-primary text-light fs-5"
            }
          >
            Favorites
          </button>
        </Link>
      </div>
    </div>
  );
}
