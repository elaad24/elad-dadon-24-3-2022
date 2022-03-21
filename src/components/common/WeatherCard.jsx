import Card from "react-bootstrap/Card";
import { getDate, getDay, getIconUrl, getTemp } from "../../utils";

export default function weatherCard({ item }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body className="text-center">
        <Card.Title>
          {getDay(item.Date)} ,{getDate(item.Date)}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted d-flex row  ">
          <div>Highes - {getTemp(item.Temperature.Maximum.Value)}</div>
          <div>Lowes - {getTemp(item.Temperature.Minimum.Value)}</div>
          <img
            src={getIconUrl(item.Day.Icon)}
            width="50px"
            height="50px"
            alt=""
          />
        </Card.Subtitle>
        <Card.Text>{item.Day.IconPhrase}</Card.Text>
      </Card.Body>
    </Card>
  );
}
