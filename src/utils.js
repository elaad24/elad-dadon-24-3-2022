import { oneDayForecast } from "./services/appService";
import {
  addTofavourites,
  removeFromFavourites,
} from "./redux/slices/favouriteSlice";

export const getDay = (date, type) => {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekDaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const day = new Date(date).getDay();
  if (type === "short") {
    return weekDaysShort[day];
  } else {
    return weekDays[day];
  }
};

export const getDate = (date) => {
  const formatedDate = new Date(date).getDate();
  const formatedMonth = new Date().toDateString().split(" ")[1];
  return `${formatedDate} ${formatedMonth}`;
};

export const getFahrenheitTemp = (tempInMetric, type = "matric") => {
  if (type === "imparial") {
    const inImparial = Math.round((tempInMetric * 9) / 5 + 32);
    return `${inImparial} ℉ `;
  }
  return `${tempInMetric} ℃ `;
};

export const getIconUrl = (iconNumber) => {
  let fixedNumber;
  if (iconNumber < 10) {
    fixedNumber = `0${iconNumber}`;
  } else if (iconNumber > 10) {
    fixedNumber = iconNumber;
  }
  return `https://developer.accuweather.com/sites/default/files/${fixedNumber}-s.png`;
};

export const getHouers = (dateTime) => {
  return new Date(dateTime).getHours();
};

export const getTempFromData = (hourlyWeatherData) => {
  return hourlyWeatherData.map((item) => item.Temperature.Value);
};

export const addOrRemoveFromFavorits = async ({
  id,
  name,
  FavoritsFromRedux,
  dispatchFunction,
}) => {
  console.log("addOrRemoveFromFavorits run");
  console.log(
    "id name FavoritsFromRedux dispatchFunction- ",
    id,
    name,
    FavoritsFromRedux,
    dispatchFunction
  );
  if (FavoritsFromRedux.length === 0) {
    console.log("Favourites is empty ");

    const { data } = await oneDayForecast(id);
    const onedayWeater = data;
    console.log("data", onedayWeater);
    console.log("dispatched");
    dispatchFunction(addTofavourites({ id, name, onedayWeater }));
  } else if (FavoritsFromRedux.length !== 0) {
    console.log("Favourites is not  empty ");
    const itemIFavourites = FavoritsFromRedux.filter((item) => item.id === id);
    if (itemIFavourites) {
      dispatchFunction(removeFromFavourites({ id }));
    } else if (!itemIFavourites) {
      const { data } = oneDayForecast(id);
      const onedayWeater = data;
      dispatchFunction(addTofavourites({ id, name, onedayWeater }));
    }
  }
};
