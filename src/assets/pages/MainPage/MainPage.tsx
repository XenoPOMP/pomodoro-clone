import cn from 'classnames';

import Page from '@components/Page/Page';
import TimerWrapper from '@components/TimerWrapper/TimerWrapper';

import Heading from '@ui/Heading/Heading';

import { useNotifications } from '@hooks/useNotifications';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <Page
      meta={{
        title: 'Main',
        description: 'Some description',
        keywords: '',
      }}
    >
      <TimerWrapper>
        <Heading className={cn('text-center')}>Setup focus time</Heading>

        <div className={cn('bg-red-600')}>Body</div>
      </TimerWrapper>
    </Page>
  );
};

export default MainPage;
