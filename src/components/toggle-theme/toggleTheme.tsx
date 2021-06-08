import * as React from 'react';
import { VNode } from 'preact';
import { useColorScheme } from '../../hooks/useColorScheme';
import { ToggleThemeWrapper } from '../../styles/common.style';

export const ToggleTheme = (): VNode => {
  const theme = useColorScheme();

  return (
    <ToggleThemeWrapper>
      {theme === 'dark' ? (
        <span role="img" aria-label="moon">
          🌑
        </span>
      ) : (
        <span role="img" aria-label="sun">
          ☀️
        </span>
      )}
    </ToggleThemeWrapper>
  );
};
