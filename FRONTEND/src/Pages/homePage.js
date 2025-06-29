import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col justify-center items-start h-screen w-screen px-8 md:px-20 bg-gradient-to-br from-pink-300 via-pink-400 to-fuchsia-500 overflow-hidden">

      {/* Top-right curved background */}
      <div className="absolute top-[-25%] right-[-15%] w-[65%] h-[130%] rotate-[-10deg] rounded-l-full bg-gradient-to-br from-white to-yellow-400 shadow-2xl z-0"></div>

      {/* Bottom-right curved background */}
      <div className="absolute bottom-[-25%] right-[0%] w-[45%] h-[90%] rotate-[15deg] rounded-full bg-gradient-to-br from-slate-500 to-slate-700 shadow-lg z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6 drop-shadow-md tracking-tight">
          ZEEPY RIDES!!
        </h1>

        <p className="text-lg text-slate-800 font-medium mb-10 max-w-md">
          The easiest and most fun way to travel. Sign in or register to get started!
        </p>

        <div className="flex flex-wrap gap-6">
          <button
            onClick={() => navigate('/login')}
            className="min-w-[140px] px-6 py-3 text-lg font-semibold uppercase tracking-wide text-blue-700 bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300 rounded-xl shadow-md hover:-translate-y-1 hover:border-slate-400 hover:shadow-lg transition-all duration-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="min-w-[140px] px-6 py-3 text-lg font-semibold uppercase tracking-wide text-blue-700 bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300 rounded-xl shadow-md hover:-translate-y-1 hover:border-slate-400 hover:shadow-lg transition-all duration-300"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
