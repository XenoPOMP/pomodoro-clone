import { CustomTheme } from '@assets/themes';

import { AppSettings, SystemLike } from '@redux/reducers/appSettingsSlice';

export type ThemesMap = Record<
  Exclude<AppSettings['theme'], SystemLike>,
  {
    name: string;
    theme: CustomTheme;
    isDefault?: boolean;
  }
>;
