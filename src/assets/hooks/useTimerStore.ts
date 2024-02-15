import { useAppDispatch, useAppSelector } from '@redux/hooks';
import {
  TimerContext,
  startTimer as startReduxTimer,
} from '@redux/reducers/timer.slice';

/**
 * Use redux store to handle timer state.
 */
export const useTimerStore = (): Pick<TimerContext, 'stage' | 'time'> & {
  startTimer: () => void;
} => {
  const { stage, time } = useAppSelector(state => state.timer);

  const dispatch = useAppDispatch();

  return {
    stage,
    time,
    startTimer: () => dispatch(startReduxTimer()),
  };
};
