import React from "react";
import WeatherCard from "./common/WeatherCard";
import { useSelector } from "react-redux";
import "../css/weatherGroup.css";
export default function WeatherGroup({ fiveDaysForcast }) {
  const isMetric = useSelector((state) => state.Settings.metricUnits);
  const inDarkMood = useSelector((state) => state.Settings.darkMode);

  return (
    <div
      className={
        inDarkMood ? "weatherGroup   mb-3 bg-dark" : "  mb-3  weatherGroup"
      }
    >
      {fiveDaysForcast.map((item) => (
        <WeatherCard
          item={item}
          key={item.Date}
          matricUnit={isMetric}
          darkMode={inDarkMood}
        />
      ))}
    </div>
  );
}
