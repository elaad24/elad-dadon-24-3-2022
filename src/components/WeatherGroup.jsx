import WeatherCard from "./common/WeatherCard";
export default function WeatherGroup({ fiveDaysForcast }) {
  return (
    <div className="">
      {fiveDaysForcast.map((item) => (
        <WeatherCard item={item} />
      ))}
    </div>
  );
}
