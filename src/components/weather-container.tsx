"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { WeatherInfo } from "@/components/weather-info";

type Weather = {
  location: string;
  temperature: number;
  windspeed: number;
};

type WeatherApiResponse = {
  title: string;
  temperature_celsius: number;
  windspeed_kph: number;
};

type WeatherContainerProps = {
  city: string;
};

export const WeatherContainer = ({ city }: WeatherContainerProps) => {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);

  useEffect(() => {
    fetch(`/api/weather?country=${city}`)
      .then((response) => response.json<WeatherApiResponse>())
      .then((response) =>
        setWeatherData({
          location: response.title,
          temperature: response.temperature_celsius,
          windspeed: response.windspeed_kph,
        })
      );
  }, [city]);

  return (
    <>
      {weatherData && (
        <>
          <div id="weather-info">
            <WeatherInfo
              location={weatherData.location}
              temperature={weatherData.temperature}
              windspeed={weatherData.windspeed}
            />
          </div>
          <Link href="/">Back</Link>
        </>
      )}

      {!weatherData && (
        <div>
          <h3 id="loading-text">Loading...</h3>
        </div>
      )}
    </>
  );
};
