import Card from "react-bootstrap/Card";
import { getDate, getDay, getIconUrl, getTemp } from "../../utils";

export default function weatherCard({ item }) {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Body className="text-center">
        <Card.Title>
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
          <div className="mb-2">{item.Day.IconPhrase}</div>
          <div className="d-flex justify-content-around text-muted ">
            <div> {getTemp(item.Temperature.Minimum.Value)}</div>
            <div>
              <b>{getTemp(item.Temperature.Maximum.Value)}</b>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
