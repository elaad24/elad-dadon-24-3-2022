import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

export default function NavBar() {
  return (
    <div className="d-flex align-items-center justify-content-between my-3 ">
      <h2 className="">Herolo Weather Task</h2>
      <div className=""></div>
      <div className="d-flex gap-4">
        <Link to="/">
          <button className="btn btn-warning text-white fs-5">Home</button>
        </Link>

        <Link to="/favorites">
          <button className="btn btn-primary light fs-5 ">Favorites</button>
        </Link>
      </div>
    </div>
  );
}