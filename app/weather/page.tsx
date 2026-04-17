'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Wind, Droplets, Thermometer, MapPin, Navigation } from 'lucide-react';
import Link from 'next/link';

// Component for Loading State (Skeleton)
const WeatherSkeleton = () => (
  <div className="w-full space-y-6 animate-pulse">
    <div className="h-12 w-48 bg-white/5 rounded-lg" />
    <div className="h-40 w-full bg-white/5 rounded-3xl" />
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3].map(i => <div key={i} className="h-24 bg-white/5 rounded-2xl" />)}
    </div>
  </div>
);

export default function WeatherPage() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError('');
    
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'City not found');
      setWeather(data);
    } catch (err: any) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-6 pt-24 max-w-4xl mx-auto">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <Link href="/" className="font-bold tracking-tighter hover:text-blue-400 transition-colors">ATMO</Link>
        <div className="flex gap-4 items-center">
          <div className="h-1 w-1 bg-green-500 rounded-full animate-ping" />
          <span className="text-xs text-slate-400 uppercase tracking-widest">Live System</span>
        </div>
      </nav>

      <div className="max-w-xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl font-bold mb-2">Weather Intelligence</h1>
          <p className="text-slate-400">Enter a global city to fetch real-time atmospheric conditions.</p>
        </header>

        <form onSubmit={handleSearch} className="relative mb-12 group">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search e.g., Tokyo, London..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-lg"
          />
          <button className="absolute right-3 top-3 p-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors">
            <Search size={20} />
          </button>
        </form>

        <AnimatePresence mode="wait">
          {loading && <WeatherSkeleton key="loader" />}

          {error && (
            <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 flex items-center gap-3">
              <span className="text-lg font-bold">!</span> {error}
            </motion.div>
          )}

          {weather && !loading && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Main Card */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-[2.5rem] p-10 backdrop-blur-2xl shadow-2xl overflow-hidden relative">
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <div className="flex items-center gap-2 text-blue-400 mb-2 font-medium">
                      <Navigation size={16} /> {weather.name}, {weather.sys.country}
                    </div>
                    <div className="text-8xl font-black tracking-tighter">
                      {Math.round(weather.main.temp)}°
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl text-slate-300 capitalize">{weather.weather[0].description}</p>
                    <p className="text-slate-500">H: {Math.round(weather.main.temp_max)}° L: {Math.round(weather.main.temp_min)}°</p>
                  </div>
                </div>
                {/* Visual Accent */}
                <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />
              </div>

              {/* Grid Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <MetricCard icon={<Thermometer size={20}/>} label="Feels Like" value={`${Math.round(weather.main.feels_like)}°`} />
                <MetricCard icon={<Droplets size={20}/>} label="Humidity" value={`${weather.main.humidity}%`} />
                <MetricCard icon={<Wind size={20}/>} label="Wind Speed" value={`${weather.wind.speed} m/s`} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function MetricCard({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
      <div className="text-blue-400 mb-3">{icon}</div>
      <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}