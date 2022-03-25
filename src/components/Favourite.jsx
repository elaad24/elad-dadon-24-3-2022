import React from "react";
import WeatherCard from "./common/WeatherCard";

import oneDayweather from "../toDelete/mockData1day";

export default function Favourite() {
  // need to get for this component the id's of the favorits and then do function that get the data of this location by the id
  // and itarat this data

  // id's -> function get_weather_by_id -> save in state and redux -> itatrat it
  // return data.map((item) => <WeatherCard item={item} />);
  //   console.log(data);
  const item = oneDayweather.DailyForecasts[0];

  return <WeatherCard item={item} redirectBtn={true} />;
}
