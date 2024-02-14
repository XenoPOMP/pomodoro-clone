import { PropsWith } from '@xenopomp/advanced-types';

import { themesMap } from '@assets/themes';
import { FC, useContext, useEffect } from 'react';

import { useAppSelector } from '@redux/hooks';

import { BodyClassnameContext } from '@providers/BodyClassnameProvider/BodyClassnameProvider';

import { isDarkMode } from '@utils/isDarkMode';

import styles from './ThemeProvider.module.scss';

const ThemeProvider: FC<PropsWith<'children', {}>> = ({ children }) => {
  const theme = useAppSelector(state => state.appSettings.theme);

  const classContext = useContext(BodyClassnameContext);
  const contextClassGroupName = 'theme';

  useEffect(() => {
    /** Clear all classes. */
    classContext.deleteClasses(contextClassGroupName);

    /** If system like theme is dark: */
    if (theme === 'system-like' && isDarkMode()) {
      classContext.registerClasses(contextClassGroupName, [
        themesMap.dark.name,
      ]);

      return;
    }

    /** If system like theme is light: */
    if (theme === 'system-like' && !isDarkMode()) {
      classContext.registerClasses(contextClassGroupName, [
        themesMap.light.name,
      ]);

      return;
    }

    if (theme !== 'system-like') {
      classContext.registerClasses(contextClassGroupName, [
        themesMap[theme].name,
      ]);

      return;
    }
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;
