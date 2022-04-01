import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SpecificLocation from "./components/SpecificLocation";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Favourite from "./components/Favourite";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const inDarkMood = useSelector((state) => state.Settings.darkMode);

  if (inDarkMood) {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "#212529";
  } else {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "#ffffff";
  }
  return (
    <div
      className={
        inDarkMood ? "app container bg-dark text-light" : "app container "
      }
    >
      <NavBar />
      <div>
        <Routes>
          <Route path="/elad-dadon-24-3-2022/" element={<Home />} />
          <Route
            path="/elad-dadon-24-3-2022/favorites"
            element={<Favourite />}
          />

          <Route
            path="/elad-dadon-24-3-2022/location/:id"
            element={<SpecificLocation />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
