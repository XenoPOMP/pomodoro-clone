import { VariableFC } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC } from 'react';

import styles from './TimerWrapper.module.scss';
import type { TimerWrapperProps } from './TimerWrapper.props';

const TimerWrapper: VariableFC<'section', TimerWrapperProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <section className={cn(styles.timerWrapper, className)} {...props}>
      {children}
    </section>
  );
};

export default TimerWrapper;
