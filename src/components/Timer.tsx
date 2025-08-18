'use client';

import { useState, useEffect } from 'react';

interface TimerProps {
  deadline: string | null;
  containerClassName?: string;
  digitClassName?: string;
  colonClassName?: string;
  showDate?: boolean;
  dateClassName?: string;
  enableMobileWarning?: boolean; // 모바일에서 경고 색상 활성화 여부
}

const Timer = ({ deadline, containerClassName, digitClassName, colonClassName, showDate = true, dateClassName, enableMobileWarning = false }: TimerProps) => {
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

    // 경고 색상 적용 로직
  const getWarningClass = (condition: boolean) => {
    if (!enableMobileWarning) return '';
    return condition ? 'text-gray-100 md:text-gray-100' : '';
  };

  return (
    <div>
      {showDate && <p className={`${dateClassName || ''} hidden md:block`}>{currentDate}</p>}
      <div className={containerClassName}>
          <p className={`${digitClassName} ${totalSecondsLeft < 3600 ? 'md:text-gray-100' : ''} ${getWarningClass(totalSecondsLeft < 3600)}`}>{timeLeft.hours}</p>
          <span className={colonClassName}>:</span>
          <p className={`${digitClassName} ${totalSecondsLeft < 60 ? 'md:text-gray-100' : ''} ${getWarningClass(totalSecondsLeft < 60)}`}>{timeLeft.minutes}</p>
          <span className={colonClassName}>:</span>
        <p className={`${digitClassName} ${totalSecondsLeft <= 0 ? 'md:text-gray-100' : ''} ${getWarningClass(totalSecondsLeft <= 0)}`}>{timeLeft.seconds}</p>
      </div>
    </div>
  );
};

export default Timer; 