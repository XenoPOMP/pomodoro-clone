import { VariableFC } from '@xenopomp/advanced-types';

import { exit } from '@tauri-apps/api/process';
import cn from 'classnames';
import { X } from 'lucide-react';

import Pressable from '@ui/Pressable/Pressable';

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

      <Pressable
        className={cn(styles.close)}
        onClick={() => {
          // let ignore = exit(1);
        }}
      >
        <X width={'0.9375em'} height={'0.9375em'} />
      </Pressable>
    </header>
  );
};

export default Header;
