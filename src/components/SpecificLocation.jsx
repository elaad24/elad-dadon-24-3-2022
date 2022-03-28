import React from "react";
import Chart from "./common/Chart";
import HomeInfo from "./HomeInfo";
import WeatherGroup from "./WeatherGroup";
import { useParams } from "react-router-dom";
import { fiveDaysForecast, hourlyForecast } from "../services/appService";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const { id } = useParams();
  const isMetric = useSelector((state) => state.Settings.metricUnits);

  console.log(id);
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const [fiveDayWeather, setFiveDayWeather] = useState(null);

  useEffect(async () => {
    const { data } = await hourlyForecast(id);
    console.log(data);
    setHourlyWeather(data);
  }, []);

  useEffect(async () => {
    const { data } = await fiveDaysForecast(id);
    setFiveDayWeather(data);
  }, []);

  return (
    <>
      {hourlyWeather && fiveDayWeather ? (
        <div className="column ">
          <HomeInfo hourWeatherData={hourlyWeather} matricUnits={isMetric} />
          <Chart hourWeatherData={hourlyWeather} matricUnits={isMetric} />
          <WeatherGroup fiveDaysForcast={fiveDayWeather?.DailyForecasts} />
        </div>
      ) : (
        <div> loading</div>
      )}
    </>
  );
}
