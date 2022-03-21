import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";

import weather from "./toDelete/mockData";
function App() {
  console.log(weather);
  return (
    <div className="app">
      <Home data={weather} />
    </div>
  );
}

export default App;
