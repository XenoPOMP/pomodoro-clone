import { VariableFC } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { Cog } from 'lucide-react';
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
      <Pressable
        onClick={() => {
          // TODO Add redirection to settings
          // navigate('/settings');
        }}
      >
        <Cog width={'.75em'} height={'.75em'} />
      </Pressable>
    </footer>
  );
};

export default Footer;
