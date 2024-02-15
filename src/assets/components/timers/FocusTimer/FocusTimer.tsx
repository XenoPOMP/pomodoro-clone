import { VariableFC } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { useEffect } from 'react';

import TimerBody from '@ui/TimerBody/TimerBody';

import { useTimer } from '@hooks/useTimer';
import { useTimerStore } from '@hooks/useTimerStore';

import { DEFAULT_TIMER_TIME } from '@utils/time';

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
    elapsed,
    incrementTimer,
    decrementTimer,
  } = useTimer({
    enabledInitially: false,
    countdown: true,
    initialValue: DEFAULT_TIMER_TIME,
  });

  const { stage, stageHistory, stampStats } = useTimerStore(localTime);

  useEffect(() => {
    switch (stage) {
      case 'not-started': {
        stopLocalTimer();

        /** Remember data to stats. */
        if (stageHistory.length > 0) {
          stampStats(elapsed);
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
      <TimerBody
        time={localTime}
        elapsed={elapsed}
        incrementTimer={incrementTimer}
        decrementTimer={decrementTimer}
      />
    </section>
  );
};

export default FocusTimer;
