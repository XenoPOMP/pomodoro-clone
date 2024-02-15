import { VariableFC } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { useEffect } from 'react';

import TimerBody from '@ui/TimerBody/TimerBody';

import { useNotifications } from '@hooks/useNotifications';
import { useTimer } from '@hooks/useTimer';
import { useTimerStore } from '@hooks/useTimerStore';

import { DEFAULT_TIMER_TIME } from '@utils/time';

import styles from './FocusTimer.module.scss';
import type { FocusTimerProps } from './FocusTimer.props';

const FocusTimer: VariableFC<'section', FocusTimerProps, 'children'> = ({
  className,
  ...props
}) => {
  const { sendNotification } = useNotifications();

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

  const { stage, stageHistory, stampStats, stopTimer } =
    useTimerStore(localTime);

  const stop = () => {
    stampStats(elapsed);
    resetLocalTimer();
    stopTimer();
  };

  useEffect(() => {
    switch (stage) {
      case 'not-started': {
        stopLocalTimer();

        /** Remember data to stats. */
        if (stageHistory.length > 0) {
          stop();
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

  useEffect(() => {
    if (localTime <= 0) {
      let ignore = sendNotification({
        title: 'Pomogenius',
        body: 'Session ended. Please, take a break!',
        sound: 'default',
      });

      stop();
    }
  }, [localTime]);

  return (
    <section className={cn(styles.timer, 'select-none', className)} {...props}>
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
