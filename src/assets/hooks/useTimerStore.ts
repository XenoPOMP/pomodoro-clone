import { useAppSelector } from '@redux/hooks';
import { TimerContext } from '@redux/reducers/timer.slice';

/**
 * Use redux store to handle timer state.
 */
export const useTimerStore = (): Pick<TimerContext, 'stage' | 'time'> => {
  const { stage, time } = useAppSelector(state => state.timer);

  return {
    stage,
    time,
  };
};
