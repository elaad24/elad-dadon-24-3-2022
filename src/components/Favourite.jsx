import React from "react";
import WeatherCard from "./common/WeatherCard";

import oneDayweather from "../toDelete/mockData1day";
import NoFavourits from "./common/NoFavourits";
import { useSelector, useDispatch } from "react-redux";

export default function Favourite() {
  const Favourites = useSelector((state) => state.Favourites);
  const isMetric = useSelector((state) => state.Settings.metricUnits);

  console.log(Favourites);
  const favouritesNotEmpty = Favourites.likedIds?.length > 0;
  console.log(favouritesNotEmpty ? "favouritesNotEmpty" : "favouritesIsEmpty");

  return favouritesNotEmpty ? (
    Favourites.likedItems?.map((item) => (
      <WeatherCard
        item={item?.onedayWeater.DailyForecasts[0]}
        redirectBtn={true}
        matricUnit={isMetric}
      />
    ))
  ) : (
    <NoFavourits />
  );
}
