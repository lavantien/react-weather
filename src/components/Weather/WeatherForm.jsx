import { useState } from "react";
import { fetchWeather } from "../../utils/api";
import WeatherDisplay from "./WeatherDisplay";

function WeatherForm() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data. Please try again.");
    }
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="border rounded px-2 py-1 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Get Weather
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default WeatherForm;
