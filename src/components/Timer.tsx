'use client';

import { useState, useEffect } from 'react';

interface TimerProps {
  deadline: string | null;
  containerClassName?: string;
  digitClassName?: string;
  colonClassName?: string;
  showDate?: boolean;
  dateClassName?: string;
}

const Timer = ({ deadline, containerClassName, digitClassName, colonClassName, showDate, dateClassName }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: '--',
    minutes: '--',
    seconds: '--',
  });
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    if (showDate) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        setCurrentDate(`${year}.${month}.${day}`);
    }

    if (!deadline) {
      setTimeLeft({ hours: '--', minutes: '--', seconds: '--' });
      return;
    }

    const interval = setInterval(() => {
      const now = new Date();
      const deadlineTime = new Date(deadline);
      const diff = deadlineTime.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline, showDate]);

  const totalSecondsLeft = deadline ? (new Date(deadline).getTime() - new Date().getTime()) / 1000 : 0;

  return (
    <div>
      {showDate && <p className={dateClassName}>{currentDate}</p>}
      <div className={containerClassName}>
        <p className={`${digitClassName} ${totalSecondsLeft < 3600 ? 'text-gray-100' : ''}`}>{timeLeft.hours}</p>
        <span className={colonClassName}>:</span>
        <p className={`${digitClassName} ${totalSecondsLeft < 60 ? 'text-gray-100' : ''}`}>{timeLeft.minutes}</p>
        <span className={colonClassName}>:</span>
        <p className={`${digitClassName} ${totalSecondsLeft <= 0 ? 'text-gray-100' : ''}`}>{timeLeft.seconds}</p>
      </div>
    </div>
  );
};

export default Timer; 