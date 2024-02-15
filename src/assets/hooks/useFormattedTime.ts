import { useMemo } from 'react';

import { SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from '@utils/time';

const formatPart = (inp: number): string => {
  if (inp < 10) {
    return `0${inp}`;
  }

  return `${inp}`;
};

const convertSeconds = (seconds: number) => {
  const hours = Math.floor(seconds / 60 / 60);
  const minutes = Math.floor((seconds / 60) % 60);
  const secondsLeft = Math.floor(seconds % 60);

  return {
    hours,
    minutes,
    secondsLeft,
  };
};

/**
 * Parse time.
 * @param time
 *
 * @example
 * 1500 => 25:00
 */
export const useFormattedTime = (time: number): string => {
  return useMemo(() => {
    const { hours, minutes, secondsLeft } = convertSeconds(time);

    /** Time is bigger than 1 hour. */
    if (hours > 0) {
      return `${formatPart(hours)}:${formatPart(minutes)}:${formatPart(
        secondsLeft
      )}`;
    }

    return `${formatPart(minutes)}:${formatPart(secondsLeft)}`;
  }, [time]);
};
