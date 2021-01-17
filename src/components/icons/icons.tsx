import * as React from 'react';
import { memo, ReactElement } from 'react';

import Rss from '../../assets/icons/rss-feed.svg';
import Github from '../../assets/icons/github-icon.svg';
import { IconWrapper } from './icons.style';
import { IconsProps } from './icons.type';

const goToGithub = () =>
  window.location.assign('https://github.com/Elliot-Evans-95');

const goToRSSFeed = () =>
  window.location.assign('https://elliotevans.site/rss.xml');

const Icons = ({ page }: IconsProps): ReactElement => {
  return (
    <IconWrapper>
      {page === 'home' && <Github onClick={goToGithub}>GITHUB</Github>}
      <Rss onClick={goToRSSFeed}>RSS FEED</Rss>
    </IconWrapper>
  );
};

export default memo(Icons);
