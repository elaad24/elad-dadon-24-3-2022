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

export default function weatherCard({ item, redirectBtn = false, matricUnit }) {
  const locaitionName = item.Link.split("/")[5];
  const locataionId = item.Link.split("/")[6];

  return (
    <Card style={{ width: "14.5rem" }}>
      <Card.Body className="text-center">
        <Card.Title>
          {redirectBtn && (
            <>
              <div className="fs-4">
                <b>{locaitionName}</b>
              </div>
            </>
          )}
          {getDay(item.Date)} ,{getDate(item.Date)}
        </Card.Title>
        <Card.Subtitle className="my-3  ">
          <img
            src={getIconUrl(item.Day.Icon)}
            width="150px"
            height="90px"
            alt=""
          />
        </Card.Subtitle>
        <Card.Text>
          <div className="mb-2 fs-5">{item.Day.IconPhrase}</div>
          <div className="d-flex justify-content-around text-muted ">
            <div>
              <b>
                {getFahrenheitTemp(item.Temperature.Maximum.Value, matricUnit)}
              </b>
            </div>
            <div>
              {" "}
              {getFahrenheitTemp(item.Temperature.Minimum.Value, matricUnit)}
            </div>
          </div>
        </Card.Text>
        {redirectBtn && (
          <Link to={`/location/${locataionId}`}>
            <button className="btn btn-secondary fs-5 px-2">see more</button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
}
