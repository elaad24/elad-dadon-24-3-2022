import React from "react";
import Chart from "./common/Chart";
import HomeInfo from "./HomeInfo";
import WeatherGroup from "./WeatherGroup";
import { useParams } from "react-router-dom";
import { fiveDaysForecast, hourlyForecast } from "../services/appService";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SpecificLocation() {
  const { id } = useParams();
  const isMetric = useSelector((state) => state.Settings.metricUnits);

  const [hourlyWeather, setHourlyWeather] = useState(null);
  const [fiveDayWeather, setFiveDayWeather] = useState(null);
  const locationId = id;
  const Favourites = useSelector((state) => state.Favourites);

  let savedWeather;
  let savedWeatherData;

  useEffect(async () => {
    //check if the weather is saved in favorits and if it does doesnt req from the server that data
    savedWeather = Favourites.likedIds.includes(`${locationId}`);

    //the data that saved for this sesific location from redux
    savedWeatherData = Favourites.likedItems.filter(
      (weatherItem) => weatherItem.id == locationId
    );
    console.log(savedWeatherData);
  });

  useEffect(async () => {
    if (!savedWeather) {
      try {
        const { data } = await hourlyForecast(id);
        setHourlyWeather(data);
      } catch (e) {
        if (e.response.status === 400) {
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
      console.log(savedWeatherData);
      setHourlyWeather(savedWeatherData[0].hourWeatherData);
      console.log("hourWeatherData added from redux ");
    }
  }, []);

  useEffect(async () => {
    if (!savedWeather) {
      try {
        const { data } = await fiveDaysForecast(id);
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

      console.log("five day weather added from redux ");
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
