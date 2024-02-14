import cn from 'classnames';
import { FC } from 'react';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={cn(styles.appHeader)} data-tauri-drag-region>
      Header (draggable)
    </header>
  );
};

export default Header;
