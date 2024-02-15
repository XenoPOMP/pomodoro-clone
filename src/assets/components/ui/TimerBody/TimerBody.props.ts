import { useTimer } from '@hooks/useTimer';

export interface TimerBodyProps
  extends Pick<
    ReturnType<typeof useTimer>,
    'time' | 'elapsed' | 'incrementTimer' | 'decrementTimer'
  > {}
