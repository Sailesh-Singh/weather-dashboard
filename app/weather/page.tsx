'use client';

import { useState } from 'react';
import Link from 'next/link';

type WeatherData = {
  name: string;
  country: string;
  temp: number;
  humidity: number;
  wind: number;
  description: string;
};

export default function WeatherPage() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to fetch weather');
      }

      setWeather({
        name: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
      });

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-8">

      {/* Header */}
      <nav className="w-full max-w-3xl mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-blue-800">SkyCast</h2>
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back Home
        </Link>
      </nav>

      {/* Card */}
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Live Weather
        </h1>

        {/* Input */}
        <form onSubmit={fetchWeather} className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter city name..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>

        {/* Loading */}
        {loading && (
          <p className="text-center text-blue-500 animate-pulse">
            Fetching weather...
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-red-500 bg-red-50 p-3 rounded-lg">
            {error}
          </p>
        )}

        {/* Weather Result */}
        {weather && (
          <div className="text-center mt-6">

            <h3 className="text-2xl font-semibold text-gray-700">
              {weather.name}, {weather.country}
            </h3>

            <div className="my-4">
              <span className="text-6xl font-bold text-gray-900">
                {Math.round(weather.temp)}°C
              </span>
            </div>

            <p className="text-lg text-gray-500 capitalize">
              {weather.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6 border-t pt-6">

              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Humidity</p>
                <p className="font-semibold text-gray-800">
                  {weather.humidity}%
                </p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Wind</p>
                <p className="font-semibold text-gray-800">
                  {weather.wind} m/s
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </main>
  );
}