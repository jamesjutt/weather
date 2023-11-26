import axios from "axios";

export const getWeather = async (city: string): Promise<Forecast> => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const { lat: latitude, lon: longitude } = (
    await axios.get<Coordinates[]>(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
    )
  ).data[0];
  return (
    await axios.get<Forecast>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=Imperial&appid=${apiKey}`
    )
  ).data;
};
