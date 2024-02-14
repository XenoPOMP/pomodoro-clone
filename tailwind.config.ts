import { RecordValue } from '@xenopomp/advanced-types';
import { getObjectKeys } from '@xenopomp/advanced-utils';

import { Config } from 'tailwindcss';
import tailwindThemer from 'tailwindcss-themer';
import { ThemeConfig } from 'tailwindcss-themer/lib/utils/optionsUtils';

import { defaultTheme, lightTheme, themesMap } from './src/assets/themes';
import { ThemesMap } from './src/assets/types/ThemesMap';

type ThemeMapEntry = RecordValue<typeof themesMap>;

/**
 * Filter themes according to filter callback result.
 * @param filterCallback
 */
const filterThemes = (filterCallback: (entr: ThemeMapEntry) => boolean) => {
  return getObjectKeys(themesMap)
    .map(themeName => themesMap[themeName])
    .filter(filterCallback);
};

const transformTheme = ({
  name,
  theme,
}: RecordValue<ThemesMap>): ThemeConfig => {
  return {
    name,
    extend: theme,
  };
};

const twConfig: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindThemer({
      defaultTheme: {
        extend: defaultTheme,
      },
      themes: [
        {
          name: themesMap.light.name,
          extend: lightTheme,
        },
      ],
    }),
  ],
};

export default twConfig;
