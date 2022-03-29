import React from "react";
import Chart from "./common/Chart";
import HomeInfo from "./HomeInfo";
import WeatherGroup from "./WeatherGroup";
import { fiveDaysForecast, hourlyForecast } from "../services/appService";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const isMetric = useSelector((state) => state.Settings.metricUnits);
  const inDarkMood = useSelector((state) => state.Settings.darkMode);

  const [hourlyWeather, setHourlyWeather] = useState(null);
  const [fiveDayWeather, setFiveDayWeather] = useState(null);

  useEffect(async () => {
    try {
      const { data } = await hourlyForecast(215854);
      console.log(data);
      setHourlyWeather(data);
    } catch (e) {
      console.dir(e.response.status);
      console.log();
      if (e.response.status == 400) {
        toast.error("error - bad request ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (e.response.status > 210) {
        toast.warn("error - most probably run out of api credit ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }, []);

  useEffect(async () => {
    try {
      const { data } = await fiveDaysForecast(215854);
      setFiveDayWeather(data);
    } catch (e) {
      console.dir(e.response.status);
      console.log();
      if (e.response.status == 400) {
        toast.error("error - bad request ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (e.response.status > 210) {
        toast.warn("ererror - most probably run out of api credit ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
