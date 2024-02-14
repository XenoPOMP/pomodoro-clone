/**
 * Returns true if system theme is dark.
 */
export const isDarkMode = (): boolean => {
  return (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
};
