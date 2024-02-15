import { VariableFC } from '@xenopomp/advanced-types';

import cn from 'classnames';

import styles from './Heading.module.scss';
import type { HeadingProps } from './Heading.props';

const Heading: VariableFC<'h2', HeadingProps> = ({
  className,
  as: Component = 'h2',
  children,
  ...props
}) => {
  return (
    <Component className={cn(styles.heading, className)} {...props}>
      {children}
    </Component>
  );
};

export default Heading;
