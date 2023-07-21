import logo from "./logo.svg";
import "./App.css";
import facilitiesData from "./Users.json";
import { FacilityList } from "./Components/FacilityList";

function App() {
  console.log(facilitiesData);
  return (
    <div className="App">
      <h1>Facility Booking</h1>
      <FacilityList facilities={facilitiesData.users} />
    </div>
  );
}

export default App;
