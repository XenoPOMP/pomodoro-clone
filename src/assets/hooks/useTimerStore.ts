import { useAppSelector } from '@redux/hooks';
import { TimerContext } from '@redux/reducers/timer.slice';

export const useTimerStore = (): Pick<TimerContext, 'stage'> => {
  const { stage } = useAppSelector(state => state.timer);

  return {
    stage,
  };
};
