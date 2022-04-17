import { oneDayForecast } from "./services/appService";
import {
  addTofavourites,
  removeFromFavourites,
} from "./redux/slices/favouriteSlice";

export const getDay = (date, short = false) => {
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
  if (short) {
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

export const getFahrenheitTemp = (tempInMetric, matric = true) => {
  if (matric === false) {
    const inImparial = Math.round((tempInMetric * 9) / 5 + 32);
    return `${inImparial} ℉ `;
  }
  return `${tempInMetric} ℃ `;
};

export const getFahrenheitValue = (tempInMetric, matric = true) => {
  if (matric === false) {
    const inImparial = Math.round((tempInMetric * 9) / 5 + 32);
    return `${inImparial}`;
  }
  return `${tempInMetric}`;
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

export const getTempFromData = (hourlyWeatherData, matricUnits) => {
  return hourlyWeatherData.map((item) =>
    getFahrenheitValue(item.Temperature.Value, matricUnits)
  );
};

export const addOrRemoveFromFavorits = async ({
  id,
  name,
  FavoritsFromRedux,
  dispatchFunction,
  hourWeatherData,
  fiveDaysForcast,
}) => {
  const itemInFavourites = FavoritsFromRedux.includes(id);
  if (itemInFavourites) {
    dispatchFunction(removeFromFavourites({ id }));
  } else if (!itemInFavourites) {
    dispatchFunction(
      addTofavourites({
        id,
        name,
        hourWeatherData,
        fiveDaysForcast,
      })
    );
  }
};

export const getTimeFromUnix = (unix) => {
  return (
    new Date(unix * 1000).toLocaleString().split(",")[1].split(":")[0] + ":00"
  );
};

export const isEnglishLetter = (txt) => {
  let include = true;
  const abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "-",
    " ",
    "  ",
  ];
  txt.split("").forEach((letter) => {
    if (!abc.includes(letter)) {
      include = false;
    }
  });
  return include;
};
