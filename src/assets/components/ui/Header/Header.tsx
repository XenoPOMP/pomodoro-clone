import cn from 'classnames';
import { ComponentProps, FC } from 'react';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={cn(styles.appHeader)} data-tauri-drag-region>
      <section className={cn(styles.logo)} data-tauri-drag-region>
        Pomogenius
      </section>
    </header>
  );
};

export default Header;
