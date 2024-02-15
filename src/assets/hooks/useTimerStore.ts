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
): Pick<TimerContext, 'stage' | 'time' | 'stageHistory'> & {
  startTimer: () => void;
  stopTimer: () => void;
  pauseTimer: () => void;
} => {
  const { stage, time, stageHistory } = useAppSelector(state => state.timer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (sync) {
      // console.log(`Set store value ${time} to sync (${sync}).`);

      dispatch(changeTime(sync));
    }
  }, [sync]);

  return {
    stage,
    stageHistory,
    time,
    startTimer: () => dispatch(changeStage('started')),
    stopTimer: () => dispatch(changeStage('not-started')),
    pauseTimer: () => dispatch(changeStage('paused')),
  };
};
