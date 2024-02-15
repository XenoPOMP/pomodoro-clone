import { VariableFC } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC, useEffect } from 'react';

import { useFormattedTime } from '@hooks/useFormattedTime';
import { useTimer } from '@hooks/useTimer';
import { useTimerStore } from '@hooks/useTimerStore';

import { DEFAULT_TIMER_TIME, SECONDS_IN_MINUTE } from '@utils/time';

import styles from './FocusTimer.module.scss';
import type { FocusTimerProps } from './FocusTimer.props';

const FocusTimer: VariableFC<'section', FocusTimerProps, 'children'> = ({
  className,
  ...props
}) => {
  const {
    time: localTime,
    stopTimer: stopLocalTimer,
    startTimer: startLocalTimer,
    reset: resetLocalTimer,
  } = useTimer({
    enabledInitially: false,
    countdown: true,
    initialValue: DEFAULT_TIMER_TIME,
  });

  const { stage, stageHistory } = useTimerStore(localTime);

  const { minutes, seconds } = useFormattedTime(localTime);

  useEffect(() => {
    switch (stage) {
      case 'not-started': {
        stopLocalTimer();

        /** Remember data to stats. */
        if (stageHistory.length > 0) {
          resetLocalTimer();
        }

        break;
      }

      case 'started': {
        startLocalTimer();
        break;
      }

      case 'paused': {
        stopLocalTimer();
        break;
      }
    }
  }, [stage]);

  return (
    <section className={cn(styles.timer, className)} {...props}>
      {minutes.toFormattedString()}:{seconds.toFormattedString()}
    </section>
  );
};

export default FocusTimer;
