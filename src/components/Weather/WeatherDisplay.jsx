import PropTypes from "prop-types";

function WeatherDisplay({ weatherData }) {
  if (!weatherData) {
    return <p>Enter a city to see the current weather.</p>;
  }

  const {
    location,
    current: { temp, feelsLike, weatherCode, precip },
  } = weatherData;

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Weather in {location}</h2>
      <p>Temperature: {temp}°C</p>
      <p>Feels Like: {feelsLike}°C</p>
      <p>The Sky: {weatherCode}</p>
      <p>Precipitation: {precip} mm</p>
    </div>
  );
}

WeatherDisplay.propTypes = {
  weatherData: PropTypes.object,
};

export default WeatherDisplay;
