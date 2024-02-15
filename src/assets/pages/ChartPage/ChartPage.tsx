import cn from 'classnames';
import { FC } from 'react';

import Page from '@components/Page/Page';
import TimerWrapper from '@components/TimerWrapper/TimerWrapper';

import Button from '@ui/Button/Button';
import ButtonGrid from '@ui/ButtonGrid/ButtonGrid';
import ChartStat from '@ui/ChartStat/ChartStat';
import Heading from '@ui/Heading/Heading';

import { useTimerStore } from '@hooks/useTimerStore';

import styles from './ChartPage.module.scss';
import type { ChartPageProps } from './ChartPage.props';

const ChartPage: FC<ChartPageProps> = ({}) => {
  const { stats } = useTimerStore();

  return (
    <Page
      meta={{
        title: 'Charts',
        description: 'Desc',
      }}
    >
      <TimerWrapper>
        <Heading className={cn('text-center select-none')}>Statistics</Heading>

        <div
          className={cn(
            'row-span-2 h-full overflow-hidden flex justify-end relative'
          )}
        >
          <div
            className={cn(
              'w-max h-full absolute top-0 right-0 flex justify-end items-end gap-[5px]'
            )}
          >
            {stats.map((stat, index) => (
              <>
                <ChartStat
                  allStats={stats}
                  currentStat={stat}
                  key={`chart-item-${index}`}
                />
              </>
            ))}
          </div>
        </div>
      </TimerWrapper>
    </Page>
  );
};

export default ChartPage;
