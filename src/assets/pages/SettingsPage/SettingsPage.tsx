import cn from 'classnames';
import { FC } from 'react';

import Page from '@components/Page/Page';
import TimerWrapper from '@components/TimerWrapper/TimerWrapper';

import Heading from '@ui/Heading/Heading';

import styles from './SettingsPage.module.scss';
import type { SettingsPageProps } from './SettingsPage.props';

const SettingsPage: FC<SettingsPageProps> = ({}) => {
  return (
    <Page
      meta={{
        title: 'Settings',
        description: 'Desc',
      }}
    >
      <TimerWrapper>
        <Heading className={cn('text-center select-none')}>Settings</Heading>
      </TimerWrapper>
    </Page>
  );
};

export default SettingsPage;
