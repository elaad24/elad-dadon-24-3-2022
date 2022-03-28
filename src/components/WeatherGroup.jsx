import WeatherCard from "./common/WeatherCard";
export default function WeatherGroup({ fiveDaysForcast }) {
  //console.log("fiveDaysForcast from weatherGroup ,", fiveDaysForcast);
  return (
    <div className="row h-25 justify-content-between mt-3">
      {fiveDaysForcast.map((item) => (
        <WeatherCard item={item} key={item.Date} />
      ))}
    </div>
  );
}
