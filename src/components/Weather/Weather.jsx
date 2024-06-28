import WeatherForm from "./WeatherForm"; // Assuming WeatherForm is in the same folder
import WeatherDisplay from "./WeatherDisplay";

function Weather() {
  return (
    <div className="weather-container">
      <h2>Weather</h2>
      <WeatherForm />{" "}
      {/* WeatherForm handles fetching and displaying weather */}
      <WeatherDisplay />{" "}
      {/* Conditional rendering based on fetched weather data */}
    </div>
  );
}

export default Weather;
