import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/30">
      <p className="text-white/80 text-sm mb-4 font-light uppercase tracking-wide text-center">Compte à rebours</p>
      <div className="grid grid-cols-4 gap-3 text-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <div className="font-montaga text-xl md:text-2xl text-white font-light">
            {timeLeft.days}
          </div>
          <div className="text-xs text-white/70 uppercase tracking-wide mt-1">Jours</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <div className="font-montaga text-xl md:text-2xl text-white font-light">
            {timeLeft.hours}
          </div>
          <div className="text-xs text-white/70 uppercase tracking-wide mt-1">Heures</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <div className="font-montaga text-xl md:text-2xl text-white font-light">
            {timeLeft.minutes}
          </div>
          <div className="text-xs text-white/70 uppercase tracking-wide mt-1">Minutes</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <div className="font-montaga text-xl md:text-2xl text-white font-light">
            {timeLeft.seconds}
          </div>
          <div className="text-xs text-white/70 uppercase tracking-wide mt-1">Secondes</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;