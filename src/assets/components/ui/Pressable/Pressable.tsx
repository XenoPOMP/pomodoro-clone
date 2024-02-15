import { VariableFC } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC } from 'react';

import styles from './Pressable.module.scss';
import type { PressableProps } from './Pressable.props';

const Pressable: VariableFC<'button', PressableProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button className={cn(styles.pressable, className)} {...props}>
      {children}
    </button>
  );
};

export default Pressable;
