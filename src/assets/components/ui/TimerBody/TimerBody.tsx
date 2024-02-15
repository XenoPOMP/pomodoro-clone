import cn from 'classnames';
import { Minus, Plus } from 'lucide-react';
import { FC } from 'react';

import Button from '@ui/Button/Button';

import { useFormattedTime } from '@hooks/useFormattedTime';
import { useTimerStore } from '@hooks/useTimerStore';

import styles from './TimerBody.module.scss';
import type { TimerBodyProps } from './TimerBody.props';

const TimerBody: FC<TimerBodyProps> = ({
  time,
  elapsed,
  incrementTimer,
  decrementTimer,
}) => {
  const { stage } = useTimerStore(time);

  const { minutes, seconds } = useFormattedTime(time);

  return (
    <>
      <div className={cn('flex gap-[.5em]')}>
        <Button
          isSquare
          disabled={!(stage === 'not-started' || stage === 'paused')}
          onClick={() => decrementTimer()}
        >
          <Minus width={'1em'} height={'1em'} />
        </Button>

        <Button
          isSquare
          disabled={!(stage === 'not-started' || stage === 'paused')}
          onClick={() => incrementTimer()}
        >
          <Plus width={'1em'} height={'1em'} />
        </Button>
      </div>

      <p>
        {minutes.toFormattedString()}:{seconds.toFormattedString()}
      </p>

      <p>{elapsed}</p>
    </>
  );
};

export default TimerBody;
