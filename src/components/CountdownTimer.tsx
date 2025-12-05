import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 29,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative glass-card rounded-xl p-4 min-w-[70px] md:min-w-[90px] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="text-3xl md:text-5xl font-bold text-gradient font-space relative z-10 block text-center">
          {value.toString().padStart(2, "0")}
        </span>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent shimmer" />
      </div>
      <span className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-widest font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 border-gradient">
      <div className="text-center mb-6">
        <h3 className="text-primary font-semibold text-lg md:text-xl tracking-wide">
          Launch Countdown
        </h3>
        <p className="text-muted-foreground text-sm mt-1">
          Get ready for something amazing
        </p>
      </div>
      <div className="flex justify-center gap-3 md:gap-6">
        <TimeBlock value={timeLeft.days} label="Days" />
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <TimeBlock value={timeLeft.minutes} label="Minutes" />
        <TimeBlock value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;
