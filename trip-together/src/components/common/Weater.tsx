import { useState, useEffect } from "react";
interface MainWeatherInfo {
  temp: number; // 온도
}
interface WeatherMain {
  main: string;
}

interface WeatherType {
  name: string;
  main: MainWeatherInfo;
  weather: WeatherMain;
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherType | null>(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat: number, lon: number) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=48d32253026038b7226a771f6ab63d20`;

    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  if (weather === null) {
    return (
      <div className="w-full bg-[#09847F] flex justify-center p-1">
        <p className="text-white">위치확인 서비스를 동의해주세요.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#09847F] flex justify-center p-1 text-white">
      <p>
        위치 : {weather && weather.name} 온도 :{" "}
        {weather && `${(Math.floor(weather.main.temp) - 273.15).toFixed(2)}`} C
        날씨 : {weather && weather.weather[0].main}
      </p>
    </div>
  );
}
