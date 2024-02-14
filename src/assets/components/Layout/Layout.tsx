import { PropsWith } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC } from 'react';

import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';

import Footer from '@ui/Footer/Footer';
import Header from '@ui/Header/Header';

import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

/**
 * App layout component.
 *
 * @param children
 * @constructor
 */
const Layout: FC<PropsWith<'children', LayoutProps>> = ({ children }) => {
  return (
    <GlobalProvider>
      <div className={cn(styles.wrapper)}>
        <Header />

        <main>{children}</main>

        <Footer />
      </div>
    </GlobalProvider>
  );
};

export default Layout;
