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

  const formattedTime = useFormattedTime(time);

  return (
    <section className={cn(styles.timerBody)}>
      <article className={cn(styles.control, '!justify-end')}>
        <Button
          isSquare
          disabled={!(stage === 'not-started' || stage === 'paused')}
          onClick={() => decrementTimer()}
        >
          <Minus width={'1em'} height={'1em'} />
        </Button>
      </article>

      <article className={cn(styles.control, styles.time)}>
        {formattedTime}
      </article>

      <article className={cn(styles.control, '!justify-start')}>
        <Button
          isSquare
          disabled={!(stage === 'not-started' || stage === 'paused')}
          onClick={() => incrementTimer()}
        >
          <Plus width={'1em'} height={'1em'} />
        </Button>
      </article>
    </section>
  );
};

export default TimerBody;
