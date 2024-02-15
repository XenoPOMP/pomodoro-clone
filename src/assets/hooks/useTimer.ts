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
  const [elapsed, setElapsed] = useState<number>(0);
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

    const elapsedTimerId = setInterval(
      () => setElapsed(prev => prev + 1),
      1000
    );

    return () => {
      clearInterval(timerId);
      clearInterval(elapsedTimerId);
    };
  }, [isEnabled]);

  return {
    time: localTime,
    startTimer: () => setIsEnabled(true),
    stopTimer: () => setIsEnabled(false),
    reset: () => setLocalTime(options.initialValue!),
    elapsed,
  };
};
