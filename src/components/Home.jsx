// BirthdayCard.jsx
import React, { useEffect, useState } from 'react';
import backgroundImg from '../images/birthday.jpg';
import balloonImg from '../images/baloon.png';
import { Link } from 'react-router-dom';

export default function BirthdayCard() {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const createBalloon = (id, delay) => ({ id, delay });
    const initialBalloons = [createBalloon(1, 0), createBalloon(2, 2000), createBalloon(3, 4000)];
    setBalloons(initialBalloons);

    const interval = setInterval(() => {
      setBalloons((prev) => {
        const newId = Math.max(...prev.map((b) => b.id)) + 1;
        return [...prev.slice(-2), createBalloon(newId, 0)];
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={backgroundImg}
          alt="Birthday Background"
          className="w-full h-full object-cover object-top brightness-75"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 via-purple-900/20 to-red-900/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-pulse">
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-red-300 bg-clip-text text-transparent drop-shadow-2xl">
              Happy Birthday
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-red-300 bg-clip-text text-transparent drop-shadow-2xl">
              Kukoo! 🎉
            </span>
          </h1>

          {/* Birthday Message */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed font-medium">
              <span className="text-yellow-300">✨🎂</span> Happy Birthday to the light of my life, Hooriya!
              <span className="text-pink-300">💖</span>
              <br className="hidden sm:block" />
              Your smile brightens my world like sunshine <span className="text-yellow-300">🌞</span>
              <br />
              Every moment with you feels magical <span className="text-purple-300">✨</span>
              <br className="hidden sm:block" />
              May your day be filled with love, laughter & dreams coming true
              <span className="text-pink-300">🌸🎁</span>
              <br />
              Stay blessed, beautiful soul <span className="text-red-300">🌹</span>
              <br className="hidden sm:block" />
              You mean everything to me <span className="text-yellow-300">💫❤️</span>
            </p>
            <Link to="/slider">
            <button className='mt-4'>...Next...</button></Link>
          </div>
        </div>
      </div>

      {/* Balloons */}
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute bottom-0 right-4 sm:right-8 md:right-16 lg:right-20 pointer-events-none"
          style={{
            animationDelay: `${balloon.delay}ms`,
            animation: "floatUp 6s ease-out infinite",
          }}
        >
          <img
            src={balloonImg}
            alt="Balloon"
            className="h-32 sm:h-48 md:h-64 lg:h-80 w-auto opacity-90 drop-shadow-lg"
          />
        </div>
      ))}

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 text-2xl opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animation: "floatHearts 8s ease-in-out infinite",
            }}
          >
            💖
          </div>
        ))}
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 text-lg opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animation: "sparkle 3s ease-in-out infinite",
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(-20px) rotate(10deg);
            opacity: 0;
          }
        }

        @keyframes floatHearts {
          0%, 100% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(50vh) scale(1);
            opacity: 0.7;
          }
        }

        @keyframes sparkle {
          0%, 100% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
