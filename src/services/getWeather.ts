import axios from "axios";

const appid = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export const getCoordinates = async (city: string, country: string) => {
  const urlCoordinates = `${apiUrl}geo/1.0/direct?q=${city},${country}&appid=${appid}`;
  const { data: coordinates } = await axios(urlCoordinates);

  if (!coordinates[0]) {
    throw new Error("Coordinates not found");
  }

  return coordinates[0];
};

export const getWeatherData = async (lat: number, lon: number) => {
  const urlWeather = `${apiUrl}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`;
  const { data: dataWeather } = await axios(urlWeather);
  return dataWeather;
};
