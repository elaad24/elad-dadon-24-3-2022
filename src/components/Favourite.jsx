import React from "react";
import WeatherCard from "./common/WeatherCard";

import oneDayweather from "../toDelete/mockData1day";
import NoFavourits from "./common/NoFavourits";
import { useSelector, useDispatch } from "react-redux";

export default function Favourite() {
  // need to get for this component the id's of the favorits and then do function that get the data of this location by the id
  // and itarat this data

  // id's -> function get_weather_by_id -> save in state and redux -> itatrat it
  // return data.map((item) => <WeatherCard item={item} />);
  //   console.log(data);

  const Favourites = useSelector((state) => state.Favourites);
  console.log(Favourites);
  const favouritesNotEmpty = Favourites?.length > 0;
  console.log(favouritesNotEmpty);

  return favouritesNotEmpty ? (
    Favourites?.map((item) => (
      <WeatherCard
        item={item?.onedayWeater.DailyForecasts[0]}
        redirectBtn={true}
      />
    ))
  ) : (
    <NoFavourits />
  );
}
