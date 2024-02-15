import { useEffect, useState } from 'react';

interface IUserTimerOptions {
  /**
   * If true, timer will be enabled initially.
   * @default false
   */
  enabledInitially?: boolean;

  /**
   * If true, timer will be countdown.
   * @default true
   */
  countdown?: boolean;

  /**
   * Initial time left.
   * @default 0;
   */
  initialValue?: number;
}

/**
 * Fully manageable timer with hooks.
 * @param options
 */
export const useTimer = (
  options: IUserTimerOptions = {
    enabledInitially: false,
    countdown: true,
    initialValue: 0,
  }
) => {
  const [localTime, setLocalTime] = useState<number>(options.initialValue!);
  const [isEnabled, setIsEnabled] = useState<boolean>(
    !!options?.enabledInitially
  );

  /** Timer timeout. */
  useEffect(() => {
    /** Do not proceed timer if it is disabled. */
    if (!isEnabled) {
      return;
    }

    const timerId = setInterval(
      () => setLocalTime(prev => (options?.countdown ? prev - 1 : prev + 1)),
      1000
    );

    return () => {
      clearInterval(timerId);
    };
  }, [isEnabled]);

  return {
    time: localTime,
    startTimer: () => setIsEnabled(true),
    stopTimer: () => setIsEnabled(false),
    reset: () => setLocalTime(options.initialValue!),
  };
};
