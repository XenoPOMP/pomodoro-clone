import { Config } from 'tailwindcss';
import tailwindThemer from 'tailwindcss-themer';

import { defaultTheme, lightTheme, themesMap } from './src/assets/themes';

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
