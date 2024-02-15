import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@redux/hooks';
import {
  TimerContext,
  changeStage,
  changeTime,
} from '@redux/reducers/timer.slice';

/**
 * Use redux store to handle timer state.
 *
 * @param sync   provide value to sync time to local timer.
 */
export const useTimerStore = (
  sync?: number
): Pick<TimerContext, 'stage' | 'time'> & {
  startTimer: () => void;
  stopTimer: () => void;
} => {
  const { stage, time } = useAppSelector(state => state.timer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (sync) {
      console.log(`Set store value ${time} to sync (${sync}).`);

      dispatch(changeTime(sync));
    }
  }, [sync]);

  return {
    stage,
    time,
    startTimer: () => dispatch(changeStage('started')),
    stopTimer: () => {
      dispatch(changeStage('not-started'));
    },
  };
};
