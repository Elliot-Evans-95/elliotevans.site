import * as React from 'react';
import { FunctionComponent, VNode } from 'preact';
import { memo } from 'preact/compat';

import Rss from '../../assets/icons/rss-feed.svg';
import Github from '../../assets/icons/github-icon.svg';
import { IconLink, IconWrapper } from './icons.style';
import { IconsProps } from './icons.type';

const Icons: FunctionComponent<IconsProps> = ({ page }): VNode => {
  return (
    <IconWrapper>
      {page === 'home' && (
        <IconLink href="https://github.com/Elliot-Evans-95">
          <Github />
        </IconLink>
      )}
      <IconLink href="https://elliotevans.info/rss.xml">
        <Rss />
      </IconLink>
    </IconWrapper>
  );
};

export default memo(Icons);
