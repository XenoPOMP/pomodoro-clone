import { FC } from 'react';

import Button from '@ui/Button/Button';

import { useTimerStore } from '@hooks/useTimerStore';

const SetupTimerControls: FC<{}> = () => {
  const { startTimer } = useTimerStore();

  return (
    <>
      <Button
        onClick={() => {
          startTimer();
        }}
      >
        Start
      </Button>
    </>
  );
};

export default SetupTimerControls;
