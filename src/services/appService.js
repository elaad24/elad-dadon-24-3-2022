import http from "./http";
import apiUrl from "../config.json";
const apikey = "UKpjmRddsUSGtOhUGlrZNaSNLe3mTiNe";

export function oneDayForecast(locationID) {
  return http.get(`${apiUrl}forecasts/v1/daily/1day/${locationID}?apikey=${apikey}&details=true&metric=true
  `);
}

export function fiveDaysForecast(locationID) {
  return http.get(
    `${apiUrl}forecasts/v1/daily/5day/${locationID}?apikey=${apikey}&details=true&metric=true`
  );
}

export function hourlyForecast(locationID) {
  return http.get(
    `${apiUrl}forecasts/v1/hourly/12hour/${locationID}?apikey=${apikey}&details=true&metric=true`
  );
}

export function autocompleteSearch(text) {
  return http.get(
    `${apiUrl}locations/v1/cities/autocomplete?apikey=${apikey}&q=${text}`
  );
}
