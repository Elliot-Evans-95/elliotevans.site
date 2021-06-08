import { useEffect, useState } from 'react';
import { Theme } from '../models/shared.types';

export function useColorScheme(): Theme {
  const [theme, setTheme] = useState<Theme>(null);

  const setColorScheme = (e) => {
    if (e.matches) {
      setTheme('dark');
      return;
    }

    setTheme('light');
  };

  useEffect(() => {
    const colorSchemeQueryList = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );

    setColorScheme(colorSchemeQueryList);
    colorSchemeQueryList.addEventListener('change', setColorScheme);

    return () => {
      colorSchemeQueryList.removeEventListener('change', setColorScheme);
    };
  }, []);

  return theme;
}
