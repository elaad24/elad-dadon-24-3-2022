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
  const locationId = 215854;

  let savedWeather;
  let savedWeatherData;

  const Favourites = useSelector((state) => state.Favourites);
  useEffect(async () => {
    //check if the weather is saved in favorits and if it does doesnt req from the server that data
    savedWeather = Favourites.likedIds.includes(`${locationId}`);

    //the data that saved for this sesific location from redux
    savedWeatherData = Favourites.likedItems.filter(
      (weatherItem) => weatherItem.id == locationId
    );
  });

  useEffect(async () => {
    if (!savedWeather) {
      try {
        const { data } = await hourlyForecast(locationId);
        setHourlyWeather(data);
      } catch (e) {
        if (e.response.status == 400) {
          toast.error("error - bad request ", {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (e.response.status > 210) {
          toast.warn("error - most probably run out of api credit ", {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    } else {
      setHourlyWeather(savedWeatherData[0].hourWeatherData);
    }
  }, []);

  useEffect(async () => {
    if (!savedWeather) {
      try {
        const { data } = await fiveDaysForecast(locationId);
        setFiveDayWeather(data);
      } catch (e) {
        if (e.response.status == 400) {
          toast.error("error - bad request ", {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (e.response.status > 210) {
          toast.warn("ererror - most probably run out of api credit ", {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    } else {
      setFiveDayWeather(savedWeatherData[0].fiveDaysForcast);
    }
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={3500}
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
          <HomeInfo
            hourWeatherData={hourlyWeather}
            matricUnits={isMetric}
            fiveDaysForcast={fiveDayWeather}
          />
          <Chart hourWeatherData={hourlyWeather} matricUnits={isMetric} />
          <WeatherGroup fiveDaysForcast={fiveDayWeather?.DailyForecasts} />
        </div>
      ) : (
        <div> loading</div>
      )}
    </>
  );
}
