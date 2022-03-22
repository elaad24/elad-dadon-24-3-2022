import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";

import fiveDaysweather from "./toDelete/mockData5days";
import hoursweather from "./toDelete/mockData12hours";
function App() {
  return (
    <div className="app">
      <Home
        fiveDaysData={fiveDaysweather.DailyForecasts}
        hourWeatherData={hoursweather}
        location={"Tel Aviv"}
      />
    </div>
  );
}

export default App;
