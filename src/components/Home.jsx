import React from "react";
import HomeInfo from "./HomeInfo";
import WeatherGroup from "./WeatherGroup";

export default function Home({ fiveDaysData, hourWeatherData, location }) {
  console.log(fiveDaysData);
  return (
    <>
      <div className="column">
        <HomeInfo hourWeatherData={hourWeatherData} location={location} />
        <WeatherGroup fiveDaysForcast={fiveDaysData} />
      </div>
    </>
  );
}
