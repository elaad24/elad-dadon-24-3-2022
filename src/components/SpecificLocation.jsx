import React from "react";
import Chart from "./common/Chart";
import HomeInfo from "./HomeInfo";
import WeatherGroup from "./WeatherGroup";

import hoursweather from "../toDelete/mockData12hours";
import fiveDaysweather from "../toDelete/mockData5days";

import { useParams } from "react-router-dom";

export default function Home() {
  const { id } = useParams();

  console.log(id);
  return (
    <>
      <div className="column ">
        <HomeInfo hourWeatherData={hoursweather} />
        <Chart hourWeatherData={hoursweather} />
        <WeatherGroup fiveDaysForcast={fiveDaysweather.DailyForecasts} />
      </div>
    </>
  );
}
