import cn from 'classnames';

import Page from '@components/Page/Page';
import TimerWrapper from '@components/TimerWrapper/TimerWrapper';
import SetupTimerControls from '@components/controls/setup-timer/SetupTimerControls';
import TimerControls from '@components/controls/timer-counts/TimerControls';
import FocusTimer from '@components/timers/FocusTimer/FocusTimer';

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
        <Heading className={cn('text-center select-none')}>
          Setup focus time
        </Heading>

        <FocusTimer />

        <ButtonGrid>
          {
            {
              'not-started': <SetupTimerControls />,
              started: <TimerControls />,
              paused: <TimerControls isPaused />,
            }[stage]
          }
        </ButtonGrid>
      </TimerWrapper>
    </Page>
  );
};

export default MainPage;
