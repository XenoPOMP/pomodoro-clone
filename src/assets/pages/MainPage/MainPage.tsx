import cn from 'classnames';

import Page from '@components/Page/Page';
import TimerWrapper from '@components/TimerWrapper/TimerWrapper';
import SetupTimerControls from '@components/controls/setup-timer/SetupTimerControls';

import Button from '@ui/Button/Button';
import ButtonGrid from '@ui/ButtonGrid/ButtonGrid';
import Heading from '@ui/Heading/Heading';

import { useNotifications } from '@hooks/useNotifications';
import { useTimerStore } from '@hooks/useTimerStore';

import styles from './MainPage.module.scss';

const MainPage = () => {
  const { stage } = useTimerStore();

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

        <ButtonGrid>
          {
            {
              'not-started': <SetupTimerControls />,
            }[stage]
          }
        </ButtonGrid>
      </TimerWrapper>
    </Page>
  );
};

export default MainPage;
