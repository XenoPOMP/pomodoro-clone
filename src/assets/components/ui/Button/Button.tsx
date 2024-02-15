import { Defined, VariableFC } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC } from 'react';

import Pressable from '@ui/Pressable/Pressable';

import styles from './Button.module.scss';
import type { ButtonProps } from './Button.props';

const Button: VariableFC<typeof Pressable, ButtonProps> = ({
  className,
  children,
  variant = 'primary',
  isSquare,
  ...props
}) => {
  const variantClass: Record<Defined<typeof variant>, string> = {
    primary: styles.primary,
  };

  return (
    <Pressable
      className={cn(
        styles.uiButton,
        variantClass[variant],
        'select-none',
        isSquare && '!aspect-square !p-0 !flex-center min-w-[2.14em]',
        className
      )}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default Button;
