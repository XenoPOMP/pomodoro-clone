import cn from 'classnames';
import { useEffect } from 'react';

import Page from '@components/Page/Page';
import TimerWrapper from '@components/TimerWrapper/TimerWrapper';
import SetupTimerControls from '@components/controls/setup-timer/SetupTimerControls';
import TimerControls from '@components/controls/timer-counts/TimerControls';
import FocusTimer from '@components/timers/FocusTimer/FocusTimer';

import ButtonGrid from '@ui/ButtonGrid/ButtonGrid';
import Heading from '@ui/Heading/Heading';

import { useTimerStore } from '@hooks/useTimerStore';

const MainPage = () => {
  const { stage, stats } = useTimerStore();

  return (
    <Page
      meta={{
        title: 'Main',
        description: 'Some description',
        keywords: '',
      }}
    >
      <TimerWrapper>
        <Heading
          className={cn(
            'text-center select-none',
            stage !== 'not-started' && 'opacity-0'
          )}
          style={{
            transition: '.15s ease opacity',
          }}
        >
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
