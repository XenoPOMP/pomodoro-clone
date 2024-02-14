import { ThemesMap } from '@type/ThemesMap';

import { defaultTheme, lightTheme } from '../themes';

export const themesMap: ThemesMap = {
  dark: {
    name: 'dark-theme',
    theme: defaultTheme,
    isDefault: true,
  },
  light: {
    name: 'light-theme',
    theme: lightTheme,
  },
};
