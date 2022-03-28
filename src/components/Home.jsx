import React from "react";
import Chart from "./common/Chart";
import HomeInfo from "./HomeInfo";
import WeatherGroup from "./WeatherGroup";

import hoursweather from "../toDelete/mockData12hours";
import fiveDaysweather from "../toDelete/mockData5days";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const isMetric = useSelector((state) => state.Settings.metricUnits);

  return (
    <>
      <div className="column ">
        <HomeInfo hourWeatherData={hoursweather} matricUnits={isMetric} />
        <Chart hourWeatherData={hoursweather} matricUnits={isMetric} />
        <WeatherGroup fiveDaysForcast={fiveDaysweather.DailyForecasts} />
      </div>
    </>
  );
}
