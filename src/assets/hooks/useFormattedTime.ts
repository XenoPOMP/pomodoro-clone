import { useMemo } from 'react';

import { SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from '@utils/time';

/**
 * Parse time.
 * @param time
 *
 * @example
 * 1500 => 25:00
 */
export const useFormattedTime = (time: number): string => {
  return useMemo(() => {
    const result = new Date(time * 1000).toISOString().slice(11, 19);

    if (time < SECONDS_IN_HOUR) {
      return result.slice(3, result.length);
    }

    return result;
  }, [time]);
};
