import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-800 text-white p-6">
      <div className="text-center animate-fade-in transition-all duration-700">
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
          SkyCast Weather
        </h1>
        <p className="text-xl mb-10 max-w-lg mx-auto font-light text-blue-100">
          Experience real-time weather tracking with beautiful dynamic data integrations.
        </p>
        <Link 
          href="/weather" 
          className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:bg-gray-100 hover:scale-105 transition transform duration-300 ease-in-out"
        >
          Explore Weather Data
        </Link>
      </div>
    </main>
  );
}