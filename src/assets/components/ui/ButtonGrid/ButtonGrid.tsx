import { VariableFC } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC } from 'react';

import styles from './ButtonGrid.module.scss';
import type { ButtonGridProps } from './ButtonGrid.props';

const ButtonGrid: VariableFC<'section', ButtonGridProps> = ({
  className,
  children,
  ...props
}) => {
  return <section></section>;
};

export default ButtonGrid;
