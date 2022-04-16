import React from "react";
import Card from "react-bootstrap/Card";
import { getDate, getDay, getIconUrl, getFahrenheitTemp } from "../../utils";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import "../../css/weatherGroup.css";

export default function weatherCard({
  item,
  redirectBtn = false,
  matricUnit,
  darkMode,
}) {
  const screenWidth = window.innerWidth;
  const screenSmall = screenWidth <= 450;

  const locaitionName = item.Link.split("/")[5];
  const locataionId = item.Link.split("/")[6];

  return (
    <div className={darkMode ? "bg-dark border card" : "card"}>
      <div className="cardBody">
        {screenSmall ? (
          <>
            <div className="cardTitle">
              {redirectBtn && <div className="">{locaitionName}</div>}
              {getDay(item.Date, screenSmall)} ,{getDate(item.Date)}
              <div className=" cardDescription">{item.Day.IconPhrase}</div>
            </div>
            {redirectBtn && (
              <Link to={`/elad-dadon-24-3-2022/location/${locataionId}`}>
                <button className="btn btn-secondary  px-0">see more</button>
              </Link>
            )}
            <p>
              <div className="cardPart2 text-muted ">
                <img
                  className="cardImg"
                  src={getIconUrl(item.Day.Icon)}
                  alt=""
                />

                <div className="cardTemp">
                  <div>
                    <b>
                      {getFahrenheitTemp(
                        item.Temperature.Maximum.Value,
                        matricUnit
                      )}
                    </b>
                  </div>
                  <div>
                    {" "}
                    {getFahrenheitTemp(
                      item.Temperature.Minimum.Value,
                      matricUnit
                    )}
                  </div>
                </div>
              </div>
            </p>
          </>
        ) : (
          <>
            <div className="cardTitle">
              {redirectBtn && <div className="">{locaitionName}</div>}
              {getDay(item.Date, screenSmall)} ,{getDate(item.Date)}
            </div>
            <div className="my-3  ">
              <img className="cardImg" src={getIconUrl(item.Day.Icon)} alt="" />
            </div>
            <p>
              <div className=" cardDescription">{item.Day.IconPhrase}</div>
              <div className="cardTemp text-muted ">
                <div>
                  <b>
                    {getFahrenheitTemp(
                      item.Temperature.Maximum.Value,
                      matricUnit
                    )}
                  </b>
                </div>
                <div>
                  {getFahrenheitTemp(
                    item.Temperature.Minimum.Value,
                    matricUnit
                  )}
                </div>
              </div>
            </p>{" "}
            {redirectBtn && (
              <Link to={`/elad-dadon-24-3-2022/location/${locataionId}`}>
                <button className="btn btn-secondary  px-1">see more</button>
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/*      */
