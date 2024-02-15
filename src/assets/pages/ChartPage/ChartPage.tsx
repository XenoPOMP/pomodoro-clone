import cn from 'classnames';
import { FC } from 'react';

import Page from '@components/Page/Page';
import TimerWrapper from '@components/TimerWrapper/TimerWrapper';

import Button from '@ui/Button/Button';
import ButtonGrid from '@ui/ButtonGrid/ButtonGrid';
import Heading from '@ui/Heading/Heading';

import styles from './ChartPage.module.scss';
import type { ChartPageProps } from './ChartPage.props';

const ChartPage: FC<ChartPageProps> = ({}) => {
  return (
    <Page
      meta={{
        title: 'Charts',
        description: 'Desc',
      }}
    >
      <TimerWrapper>
        <Heading className={cn('text-center select-none')}>Statistics</Heading>

        <div className={cn('bg-red-600 row-span-2')}>Sus</div>
      </TimerWrapper>
    </Page>
  );
};

export default ChartPage;
