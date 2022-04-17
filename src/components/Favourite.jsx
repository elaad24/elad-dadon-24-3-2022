import React from "react";
import WeatherCard from "./common/WeatherCard";
import { ToastContainer } from "react-toastify";

import oneDayweather from "../toDelete/mockData1day";
import NoFavourits from "./common/NoFavourits";
import { useSelector, useDispatch } from "react-redux";

export default function Favourite() {
  const Favourites = useSelector((state) => state.Favourites);
  const isMetric = useSelector((state) => state.Settings.metricUnits);
  const inDarkMood = useSelector((state) => state.Settings.darkMode);

  const favouritesNotEmpty = Favourites.likedIds?.length > 0;
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={1700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {favouritesNotEmpty ? (
        Favourites.likedItems?.map((item) => (
          <div className="d-flex gap-2">
            <WeatherCard
              item={item?.fiveDaysForcast.DailyForecasts[0]}
              redirectBtn={true}
              matricUnit={isMetric}
              darkMode={inDarkMood}
            />
          </div>
        ))
      ) : (
        <NoFavourits />
      )}
    </>
  );
}
