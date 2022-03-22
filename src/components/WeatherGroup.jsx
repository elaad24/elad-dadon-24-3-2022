import WeatherCard from "./common/WeatherCard";
export default function WeatherGroup({ fiveDaysForcast }) {
  return (
    <div className="row h-25">
      {fiveDaysForcast.map((item) => (
        <WeatherCard item={item} />
      ))}
    </div>
  );
}
