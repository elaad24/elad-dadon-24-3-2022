import React, { useState, useEffect } from "react";
import {
  getIconUrl,
  getDay,
  addOrRemoveFromFavorits,
  getTimeFromUnix,
  getFahrenheitValue,
} from "../utils";
import bookmark from "../icons/bookmark.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";

export default function HomeInfo({ hourWeatherData, matricUnits }) {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const Favourites = useSelector((state) => state.Favourites);
  const [currentItem, setCurrentItem] = useState(hourWeatherData[0]);

  const locationName = currentItem.Link.split("/")[5];
  const locationId = currentItem.Link.split("/")[6];

  console.log(Favourites.likedIds);

  useEffect(() => {
    if (Favourites.likedIds.includes(locationId)) {
      setLiked(true);
    }
  }, [Favourites.likedIds]);

  const likeCombo = () => {
    addOrRemoveFromFavorits({
      id: locationId,
      name: locationName,
      FavoritsFromRedux: Favourites.likedIds,
      dispatchFunction: dispatch,
    });

    if (liked) {
      setLiked(false);
      toast.error("removed from favorites !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast("add to favorites !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
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
      <div className="d-flex align-items-center gap-3">
        <img src={getIconUrl(currentItem.WeatherIcon)} width="300px" />
        <h1>
          {getFahrenheitValue(currentItem.Temperature.Value, matricUnits)}
          <span className="text-muted fs-2">
            {matricUnits ? currentItem.Temperature.Unit : "F"}
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
          {getTimeFromUnix(currentItem.EpochDateTime)}
        </div>
        <div className="fs-5 text-muted">
          {currentItem.IconPhrase} , {currentItem.RealFeelTemperature.Phrase}
        </div>
        <div className="fs-5 text-muted">
          <button className="btn fs-5 text-muted" onClick={() => likeCombo()}>
            add to favorits -
            <img src={bookmark} alt="" width={"40px"} />
          </button>
        </div>
      </div>
    </div>
  );
}
