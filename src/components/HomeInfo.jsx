import React, { useState } from "react";
import { getIconUrl, getDay } from "../utils";
export default function HomeInfo({ hourWeatherData }) {
  const getTimeFromUnix = (unix) => {
    return (
      new Date(unix * 1000).toLocaleString().split(",")[1].split(":")[0] + ":00"
    );
  };

  const [currentItem, setCurrentItem] = useState(hourWeatherData[0]);

  const locationName = currentItem.Link.split("/")[5];
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-3">
        <img src={getIconUrl(currentItem.WeatherIcon)} width="300px" />
        <h1>
          {currentItem.Temperature.Value}
          <span className="text-muted fs-2">
            {currentItem.Temperature.Unit}
          </span>
        </h1>
        <div className="column">
          <div className="fs-5 text-muted">
            {" "}
            uv index: {currentItem.UVIndexText}
          </div>
          <div className="fs-5 text-muted">
            wind: {currentItem.Wind.Speed.Value} km/h
          </div>
          <div className="fs-5 text-muted">
            rain: {currentItem.RainProbability}%
          </div>
          <div className="fs-5 text-muted">
            Humidity: {currentItem.RelativeHumidity}%
          </div>
        </div>
      </div>

      <div className="column text-end">
        <div className="fs-3" style={{ textTransform: "capitalize" }}>
          {locationName}
        </div>
        <div className=" fs-5 text-muted">
          {getDay(currentItem.EpochDateTime * 1000)}
          {getTimeFromUnix(currentItem.EpochDateTime)}{" "}
        </div>
        <div className="fs-5 text-muted">
          {currentItem.IconPhrase} , {currentItem.RealFeelTemperature.Phrase}{" "}
        </div>
      </div>
    </div>
  );
}

/*  <div className="w-25">
          <div>
            {" "}
            date-time:{getTimeFromUnix(item.EpochDateTime)}{" "}
            {getDay(item.EpochDateTime * 1000)}
          </div>
          <div className="">uv index - {item.UVIndexText}</div>
          <div className="">wind speed - {item.Wind.Speed.Value} km/h </div>
          <div>
            {" "}
            icon:{" "}
            <img
              src={getIconUrl(item.WeatherIcon)}
              width="150px"
              height="90px"
              alt=""
            />
          </div>
          <div>
            temp:{item.Temperature.Value} {item.Temperature.Unit}
          </div>
          <div> description {item.IconPhrase}</div>
        </div> */
