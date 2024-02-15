import { Stat } from '@redux/reducers/timer.slice';

export interface ChartStatProps {
  allStats: Stat[];
  currentStat: Stat;
}
