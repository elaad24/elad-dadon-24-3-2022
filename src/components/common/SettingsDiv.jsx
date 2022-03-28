import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector, useDispatch } from "react-redux";
import { changeMode, changeTempUnits } from "../../redux/slices/settingsSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SettingsDiv() {
  const inDarkMood = useSelector((state) => state.Settings.darkMode);
  const isMetric = useSelector((state) => state.Settings.metricUnits);
  const dispatch = useDispatch();

  const [isDarkMode, setIsDarkMode] = useState(inDarkMood);
  const [unitType, setUnitType] = useState("C");

  console.log("isDarkMode", isDarkMode);
  console.log("unitType", unitType);

  const changeLightMode = () => {
    setIsDarkMode(!inDarkMood);
    dispatch(changeMode());

    const prompt = isDarkMode ? "On" : "Off";

    toast.success(`Dark Mode ${prompt} !`, {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const changeUnits = () => {
    if (isMetric) {
      setUnitType("F");
    } else if (!isMetric) {
      setUnitType("C");
    }
    dispatch(changeTempUnits());

    const prompt = !isMetric ? "Metric" : "Fahrenheit";

    toast.success(`Temperature Units Change To  ${prompt} !`, {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="d-flex gap-1 align-items-center text-center ">
      <div>
        <DarkModeToggle
          onChange={changeLightMode}
          checked={isDarkMode}
          size={90}
        />
      </div>

      <button
        className="btn py-0"
        style={{ fontSize: "50px" }}
        onClick={changeUnits}
      >
        <span>{unitType}&#xb0;</span>
      </button>
    </div>
  );
}
