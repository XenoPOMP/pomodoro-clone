import cn from 'classnames';
import { FC } from 'react';

import styles from './ChartStat.module.scss';
import type { ChartStatProps } from './ChartStat.props';

const ChartStat: FC<ChartStatProps> = ({ allStats, currentStat: { time } }) => {
  const maximumTime = allStats
    .map(({ time }) => time)
    .sort((a, b) => {
      if (a === b) return 0;

      if (a < b) return 1;

      return -1;
    })[0];

  const percent = (time / maximumTime) * 100;

  return (
    <div
      className={cn('bg-green-300 w-[5px]')}
      style={{
        height: `${percent}%`,
      }}
    ></div>
  );
};

export default ChartStat;
