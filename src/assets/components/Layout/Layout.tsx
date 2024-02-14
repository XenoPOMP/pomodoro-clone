import { PropsWith } from '@xenopomp/advanced-types';

import { FC } from 'react';

import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';

import Header from '@ui/Header/Header';

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
      <Header />

      <main>{children}</main>
    </GlobalProvider>
  );
};

export default Layout;
