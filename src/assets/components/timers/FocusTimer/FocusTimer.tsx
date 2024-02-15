import { VariableFC } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC, useEffect } from 'react';

import { useFormattedTime } from '@hooks/useFormattedTime';
import { useTimer } from '@hooks/useTimer';
import { useTimerStore } from '@hooks/useTimerStore';

import { SECONDS_IN_MINUTE } from '@utils/time';

import styles from './FocusTimer.module.scss';
import type { FocusTimerProps } from './FocusTimer.props';

const FocusTimer: VariableFC<'section', FocusTimerProps, 'children'> = ({
  className,
  ...props
}) => {
  const { stage } = useTimerStore();

  const {
    time: localTime,
    stopTimer: stopLocalTimer,
    startTimer: startLocalTimer,
  } = useTimer({
    enabledInitially: false,
    countdown: true,
    initialValue: SECONDS_IN_MINUTE * 25 + 15,
  });

  const { minutes, seconds } = useFormattedTime(localTime);

  useEffect(() => {
    switch (stage) {
      case 'not-started': {
        stopLocalTimer();
        break;
      }
    }
  }, []);

  return (
    <section className={cn(className)} {...props}>
      {minutes.toFormattedString()}:{seconds.toFormattedString()}
    </section>
  );
};

export default FocusTimer;
