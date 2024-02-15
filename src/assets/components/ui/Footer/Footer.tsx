import { VariableFC } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { BarChart3, Cog, Pin } from 'lucide-react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Pressable from '@ui/Pressable/Pressable';

import styles from './Footer.module.scss';
import type { FooterProps } from './Footer.props';

const Footer: VariableFC<'footer', FooterProps, 'children'> = ({
  className,
  ...props
}) => {
  const navigate = useNavigate();

  return (
    <footer className={cn(styles.appFooter, className)} {...props}>
      <section className={cn(styles.part, '!justify-start')}>
        <Pressable disabled>
          <BarChart3 width={'.75em'} height={'.75em'} />
        </Pressable>
      </section>

      <section className={cn(styles.part)}></section>

      <section className={cn(styles.part, '!justify-end')}>
        {/*<Pressable disabled>*/}
        {/*  <Pin width={'.75em'} height={'.75em'} />*/}
        {/*</Pressable>*/}

        <Pressable disabled>
          <Cog width={'.75em'} height={'.75em'} />
        </Pressable>
      </section>
    </footer>
  );
};

export default Footer;
