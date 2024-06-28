// Function to fetch weather data from wttr.in JSON API
export async function fetchWeather(city) {
  const baseUrl = "https://wttr.in/";
  const format = "j1"; // JSON format with basic weather data

  const url = `${baseUrl}${city}?format=${format}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.statusText}`);
    }
    const data = await response.json();
    const processedData = formatWeatherData(data);
    return processedData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error; // Re-throw the error for handling in the component
  }
}

// Function to format weather data (example implementation)
function formatWeatherData(data) {
  // Extract relevant information from the wttr.in JSON response (structure may vary)
  const { current_condition, weather } = data;
  console.log("utils/api.js: formatWeatherData, data" + JSON.stringify(data));

  const formattedData = {
    location:
      data.nearest_area[0].areaName[0].value +
      ", " +
      data.nearest_area[0].country[0].value,
    current: {
      weatherCode: current_condition[0].weatherDesc[0].value,
      temp: current_condition[0].temp_C,
      feelsLike: current_condition[0].FeelsLikeC,
      precip: weather[0].precipMM,
    },
  };

  return formattedData;
}

export async function fetchStarWarsCharacters(searchTerm) {
  const SWAPI_URL = "https://swapi.dev/api/people/"; // SWAPI endpoint for people (characters)

  try {
    const url = searchTerm
      ? `${SWAPI_URL}?search=${searchTerm}`
      : SWAPI_URL + "1"; // Add search parameter if provided
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Error fetching Star Wars characters: ${response.statusText}`,
      ); // Handle non-2xx status codes
    }

    const data = await response.json(); // Parse the JSON response
    console.log(
      "utils/api.js: fetchStarWarsCharacters, data" + JSON.stringify(data),
    );

    return data.results;
  } catch (error) {
    console.error("Error fetching Star Wars characters:", error);
    throw error; // Re-throw the error for handling in the calling component
  }
}
