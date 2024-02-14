import { VariableFC } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { X } from 'lucide-react';

import TomatoIcon from '../../../icons/tomato-icon.svg?react';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: VariableFC<'header', HeaderProps, 'children'> = ({
  className,
  ...props
}) => {
  return (
    <header
      className={cn(styles.appHeader, className)}
      data-tauri-drag-region
      {...props}
    >
      <section className={cn(styles.logo)} data-tauri-drag-region>
        Pomogenius
        <TomatoIcon />
      </section>

      <section className={cn(styles.close)}>
        <X width={'0.9375em'} height={'0.9375em'} />
      </section>
    </header>
  );
};

export default Header;
