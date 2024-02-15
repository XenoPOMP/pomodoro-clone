import { FC } from 'react';

import Button from '@ui/Button/Button';

import { useTimerStore } from '@hooks/useTimerStore';

const TimerControls: FC<{ isPaused?: boolean }> = ({ isPaused = false }) => {
  const { stopTimer, startTimer, pauseTimer } = useTimerStore();

  return (
    <>
      {isPaused ? (
        <Button onClick={startTimer}>Continue</Button>
      ) : (
        <Button onClick={pauseTimer}>Pause</Button>
      )}

      <Button
        onClick={() => {
          stopTimer();
        }}
      >
        Stop
      </Button>
    </>
  );
};

export default TimerControls;
