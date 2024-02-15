import { useMemo } from 'react';

import { SECONDS_IN_MINUTE } from '@utils/time';

export class TimePart {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  /**
   * Format time part to correct case.
   *
   * @example
   * 10 => 10
   *  5 => 05
   */
  toFormattedString(): string {
    if (this.value >= 10) return `${this.value}`;

    return `0${this.value}`;
  }
}

/**
 * Parse time.
 * @param time
 *
 * @example
 * 1500 => 25:00
 */
export const useFormattedTime = (
  time: number
): {
  minutes: TimePart;
  seconds: TimePart;
} => {
  return useMemo(
    () => ({
      minutes: new TimePart(parseInt(`${time / SECONDS_IN_MINUTE}`)),
      seconds: new TimePart(time % SECONDS_IN_MINUTE),
    }),
    [time]
  );
};
