import { FC } from 'react';

import Button from '@ui/Button/Button';

import { useTimerStore } from '@hooks/useTimerStore';

const TimerControls: FC<{}> = () => {
  const { stopTimer } = useTimerStore();

  return (
    <>
      <Button>Pause</Button>

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
