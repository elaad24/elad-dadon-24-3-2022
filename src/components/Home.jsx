import React from "react";
import WeatherGroup from "./WeatherGroup";

export default function Home({ data }) {
  const fiveDaysForcast = data.DailyForecasts;
  return (
    <>
      <WeatherGroup fiveDaysForcast={fiveDaysForcast} />
    </>
  );
}
