import { FC } from 'react';

import Button from '@ui/Button/Button';

const TimerControls: FC<{}> = () => {
  return (
    <>
      <Button>Pause</Button>
      <Button>Stop</Button>
    </>
  );
};

export default TimerControls;
