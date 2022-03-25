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

function App() {
  return (
    <div className="app container d-flex">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favourite />} />

          <Route path="/location/:id" element={<SpecificLocation />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
