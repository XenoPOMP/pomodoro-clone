import createPlugin from 'tailwindcss/plugin';

export const CustomClassesPlugin = () => {
  return createPlugin(({ addComponents }) => {
    addComponents({
      '.flex-center': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
  });
};
